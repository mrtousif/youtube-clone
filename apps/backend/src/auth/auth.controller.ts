import { Controller, Get, Logger, Query, Request, Response, UseGuards } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import type { FastifyReply, FastifyRequest } from 'fastify';
import { Issuer, UserinfoResponse } from 'openid-client';

import { AuthService } from './auth.service';
import { JwtGuard } from './jwt.guard';

@Controller('auth')
export class AuthController {
    private readonly logger = new Logger(AuthController.name);

    constructor(private readonly authService: AuthService) {}

    @UseGuards(JwtGuard)
    @Get('/login')
    login() {}

    @UseGuards(JwtGuard)
    @Get('/user')
    user(@Request() req) {
        this.logger.log(req.user);
        return this.authService.findUser(req.user.sub);
    }

    @UseGuards(JwtGuard)
    @Get('/callback')
    async loginCallback(@Request() req, @Response() res: FastifyReply) {
        res.redirect('/');
    }

    @Get('/logout')
    async logout(@Request() req, @Response() res: FastifyReply) {
        const id_token = req.user ? req.user.id_token : undefined;
        req.logout();
        req.session.delete();

        const TrustIssuer = await Issuer.discover(
            `${process.env.OPENID_CLIENT_PROVIDER_OIDC_ISSUER}/.well-known/openid-configuration`
        );
        const end_session_endpoint = TrustIssuer.metadata.end_session_endpoint;
        if (end_session_endpoint) {
            res.redirect(
                end_session_endpoint +
                    '?post_logout_redirect_uri=' +
                    process.env.OPENID_CLIENT_REGISTRATION_LOGIN_POST_LOGOUT_REDIRECT_URI +
                    (id_token ? '&id_token_hint=' + id_token : '')
            );
        } else {
            res.redirect('/');
        }
    }


    @MessagePattern('KK.EVENT.#')
    getNotifications(@Payload() data: number[], @Ctx() context: RmqContext) {
        console.log(data)
        console.log(context.getMessage());
    }

}

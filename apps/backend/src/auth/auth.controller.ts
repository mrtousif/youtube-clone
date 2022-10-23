import { Controller, Get, Logger, Query, Request, Res, UseGuards } from '@nestjs/common';
import type { FastifyReply, FastifyRequest } from 'fastify';
import { Issuer } from 'openid-client';

import { AuthService } from './auth.service';
import { JwtGuard } from './jwt.guard';

@Controller('auth')
export class AuthController {
    private readonly logger = new Logger(AuthController.name);

    constructor(private readonly authService: AuthService) {}

    @UseGuards(JwtGuard)
    @Get('/login')
    login() {}

    @Get('/user')
    user(@Request() req) {
        console.log(req.user);
        return req.user;
    }

    @Get('/callback')
    async loginCallback(@Request() req, @Res() res: FastifyReply) {
        const idToken = await this.authService.getIdToken(req);
        this.logger.log(idToken);

        res.redirect('/');
    }

    @Get('/logout')
    async logout(@Request() req, @Res() res: FastifyReply) {
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
}

import { Controller, Get, Logger, Request, Response, UseGuards, Headers } from '@nestjs/common';
import type { FastifyReply } from 'fastify';
import { Issuer, UserinfoResponse } from 'openid-client';
import { config } from '../config/index';
import { AuthService } from './auth.service';
import { FastifyRequestType, JwtGuard } from './jwt.guard';

@Controller('auth')
export class AuthController {
    private readonly logger = new Logger(AuthController.name);

    constructor(private readonly authService: AuthService) {}

    @UseGuards(JwtGuard)
    @Get('/login')
    login() {}

    @UseGuards(JwtGuard)
    @Get('/user')
    async user(@Request() req: FastifyRequestType) {
        return {
            user: await this.authService.getUserInfo(req.accessToken),
            tokens: req.cookies,
        };
    }

    @UseGuards(JwtGuard)
    @Get('/callback')
    async loginCallback(@Headers() headers: Headers, @Response() res: FastifyReply) {
        res.redirect(303, '/');
    }

    @Get('/logout')
    async logout(
        @Request() req: FastifyRequestType,
        @Response({ passthrough: true }) res: FastifyReply
    ) {
        try {
            const id_token = req.cookies['id_token'] ?? undefined;

            req.session.delete();

            res.clearCookie('id_token', { path: '/auth' });
            res.clearCookie('access_token', { path: '/auth' });
            res.clearCookie('refresh_token', { path: '/auth' });

            const TrustIssuer = await Issuer.discover(
                `${config.OPENID_CLIENT_PROVIDER_OIDC_ISSUER}/.well-known/openid-configuration`
            );

            const end_session_endpoint = TrustIssuer.metadata.end_session_endpoint;

            if (end_session_endpoint && id_token) {
                const uri =
                    end_session_endpoint +
                    '?post_logout_redirect_uri=' +
                    config.OPENID_CLIENT_REGISTRATION_LOGIN_POST_LOGOUT_REDIRECT_URI +
                    '&id_token_hint=' +
                    id_token;
                return res.redirect(303, uri);
            } else {
                return res.redirect(303, end_session_endpoint);
            }
        } catch (error) {
            return res.redirect(303, '/');
        }
    }
}
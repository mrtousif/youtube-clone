import { Controller, Get, Request, Res, UseGuards } from '@nestjs/common';
import { Issuer } from 'openid-client';

import { AuthService } from './auth.service';
import { LoginGuard } from './login.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @UseGuards(LoginGuard)
    @Get('/login')
    login() {}

    @Get('/user')
    user(@Request() req) {
        return req.user;
    }

    @UseGuards(LoginGuard)
    @Get('/callback')
    loginCallback(@Res() res) {
        res.redirect('/');
    }

    @Get('/logout')
    async logout(@Request() req, @Res() res) {
        const id_token = req.user ? req.user.id_token : undefined;
        req.logout();
        req.session.destroy(async (error: any) => {
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
        });
    }
}

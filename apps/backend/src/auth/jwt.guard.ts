import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import type { FastifyReply, FastifyRequest } from 'fastify';
import { IncomingMessage } from 'http';
import { generators } from 'openid-client';

import { config } from '../config/index';
import { AuthService } from './auth.service';

@Injectable()
export class JwtGuard implements CanActivate {
    constructor(
        private readonly jwtService: JwtService,
        private readonly authService: AuthService
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = this.getRequest<FastifyRequest & { user?: Record<string, unknown> }>(
            context
        );
        const sessionKey = 'oidc';

        try {
            const token = this.getToken(request);
            const user = this.jwtService.verify(token);
            request.user = user;
            return true;
        } catch (e) {
            const session = request.session.get(sessionKey);
            const response: FastifyReply = context.switchToHttp().getResponse();
            if (session) {
                const { state, nonce } = session;
                const req = request as unknown as IncomingMessage;
                try {
                    delete request.session[sessionKey];
                } catch (err) {}

                const result = await this.authService.callback(req, {
                    state,
                    nonce,
                });
                response.headers['authorization'] = `Bearer ${result.access_token}`;
                response.setCookie('access_token', result.access_token);
                response.setCookie('refresh_token', result.refresh_token);
                response.setCookie('id_token', result.id_token);

                response.redirect('/');
            } else {
                const params = {
                    state: generators.state(),
                    nonce: generators.nonce(),
                };
                request.session.set(sessionKey, params);
                console.log('params', params);

                response.redirect(
                    this.authService.getAuthorizationUrl({
                        ...params,
                        redirect_uri: config.OPENID_CLIENT_REGISTRATION_LOGIN_REDIRECT_URI,
                        scope: 'openid email profile',
                    })
                );
            }

            // return false;
        }
    }

    protected getRequest<T>(context: ExecutionContext): T {
        return context.switchToHttp().getRequest();
    }

    protected getToken(request: { headers: Record<string, string | string[]> }): string {
        const authorization = request.headers['authorization'];
        if (!authorization || Array.isArray(authorization)) {
            throw new Error('Invalid Authorization Header');
        }
        const [_, token] = authorization.split(' ');
        return token;
    }
}

@Injectable()
export class GqlJwtAuthGuard extends JwtGuard {
    getRequest(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context);
        return ctx.getContext().req;
    }
}

import { CanActivate, ExecutionContext, Injectable, Logger } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import type { FastifyReply, FastifyRequest } from 'fastify';
import { IncomingMessage } from 'http';
import { generators } from 'openid-client';

import { config } from '../config/index';
import { AuthService } from './auth.service';

@Injectable()
export class JwtGuard implements CanActivate {
    private readonly logger = new Logger(JwtGuard.name);

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
            // const user = await this.authService.getUserInfo(token)
            const user = this.jwtService.verify(token);
            request.user = user;
            return true;
        } catch (e) {
            this.logger.error(e);
            const session = request.session.get(sessionKey);
            const response: FastifyReply = context.switchToHttp().getResponse();
            if (session?.state && session?.nonce) {
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
                response.setCookie('access_token', `Bearer ${result.access_token}`);
                response.setCookie('refresh_token', result.refresh_token);
                response.setCookie('id_token', result.id_token);

                response.redirect('/');
            } else {
                const params = {
                    state: generators.state(),
                    nonce: generators.nonce(),
                };
                request.session.set(sessionKey, params);

                response.redirect(
                    this.authService.getAuthorizationUrl({
                        ...params,
                        redirect_uri: config.OPENID_CLIENT_REGISTRATION_LOGIN_REDIRECT_URI,
                        scope: 'openid email profile',
                    })
                );
            }

            return;
        }
    }

    protected getRequest<T>(context: ExecutionContext): T {
        return context.switchToHttp().getRequest();
    }

    protected getToken(request: FastifyRequest): string {
        const authorization = request.headers['authorization'] || request.cookies['access_token'];
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

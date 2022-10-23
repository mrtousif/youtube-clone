import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import type { FastifyReply, FastifyRequest } from 'fastify';
import { generators } from 'openid-client';

import { config } from '../config/index';
import { AuthService } from './auth.service';

@Injectable()
export class JwtGuard implements CanActivate {
    constructor(
        private readonly jwtService: JwtService,
        private readonly authService: AuthService
    ) {}

    canActivate(context: ExecutionContext): boolean {
        const request = this.getRequest<FastifyRequest & { user?: Record<string, unknown> }>(
            context
        );

        try {
            const token = this.getToken(request);
            const user = this.jwtService.verify(token);
            request.user = user;
            return true;
        } catch (e) {
            const response: FastifyReply = context.switchToHttp().getResponse();
            response.redirect(
                this.authService.getAuthorizationUrl({
                    state: generators.state(),
                    nonce: generators.nonce(),
                    redirect_uri: config.OPENID_CLIENT_REGISTRATION_LOGIN_REDIRECT_URI,
                    scope: config.OPENID_CLIENT_REGISTRATION_LOGIN_SCOPE,
                })
            );

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

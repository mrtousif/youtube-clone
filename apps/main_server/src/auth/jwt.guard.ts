import {
    CanActivate,
    ExecutionContext,
    Injectable,
    Logger,
    UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import type { FastifyReply, FastifyRequest } from 'fastify';
import { IncomingMessage } from 'http';
import { TokenSet, UserinfoResponse, generators } from 'openid-client';

import { config } from '../config/index';
import { AuthService } from './auth.service';

export type FastifyRequestType = FastifyRequest & {
    user?: UserJWT | UserinfoResponse;
    accessToken?: string;
};

@Injectable()
export class JwtGuard implements CanActivate {
    private readonly logger = new Logger(JwtGuard.name);

    constructor(
        private readonly jwtService: JwtService,
        private readonly authService: AuthService
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = this.getRequest<FastifyRequestType>(context);
        const response: FastifyReply = context.switchToHttp().getResponse();
        const sessionKey = 'oidc';
        try {
            let token = this.getToken(request);

            const user = this.jwtService.verify<UserJWT>(token);
            const refreshToken = request.cookies['refresh_token'];

            if (Date.now() >= user.exp * 1000 && refreshToken) {
                const result = await this.authService.refreshToken(refreshToken);
                response.setCookie('access_token', `Bearer ${result.access_token}`);
                response.setCookie('refresh_token', result.refresh_token);
                response.setCookie('id_token', result.id_token);
                token = result.access_token;
            }

            request.user = user;
            request.accessToken = token;
            return true;
        } catch (e) {
            const session = request.session.get(sessionKey);

            if (session?.state && session?.nonce) {
                const { state, nonce } = session;
                const req = request as unknown as IncomingMessage;
                try {
                    delete request.session[sessionKey];
                } catch (err) {}
                let result: TokenSet;
                try {
                    result = await this.authService.callback(req, {
                        state,
                        nonce,
                    });

                    response.headers['authorization'] = `Bearer ${result.access_token}`;
                    response.setCookie('access_token', `Bearer ${result.access_token}`);
                    response.setCookie('refresh_token', result.refresh_token);
                    response.setCookie('id_token', result.id_token);
                    const user = await this.authService.getUserInfo(result.access_token);
                    request.user = user;
                    await this.authService.createOrUpdateUser({
                        authId: user.sub,
                        name: user.given_name,
                        email: user.email,
                    });

                    return true;
                } catch (error) {
                    this.redirectToLogin(request, response, sessionKey);
                }
            } else {
                this.redirectToLogin(request, response, sessionKey);
            }

            return false;
        }
    }

    private redirectToLogin(
        request: FastifyRequestType,
        response: FastifyReply,
        sessionKey: string
    ) {
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

    protected getRequest<T>(context: ExecutionContext): T {
        return context.switchToHttp().getRequest();
    }

    protected getToken(request: FastifyRequest): string {
        const authorization = request.headers['authorization'] || request.cookies['access_token'];
        if (!authorization || Array.isArray(authorization)) {
            throw new UnauthorizedException('Invalid Authorization Header');
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

export interface UserJWT {
    exp: number;
    iat: number;
    auth_time: number;
    jti: string;
    iss: string;
    aud: string;
    sub: string;
    typ: string;
    azp: string;
    nonce: string;
    session_state: string;
    acr: string;
    realm_access: RealmAccess;
    resource_access: ResourceAccess;
    scope: string;
    sid: string;
    email_verified: boolean;
    'https://hasura.io/jwt/claims': HTTPSHasuraIoJwtClaims;
    preferred_username: string;
    given_name: string;
    family_name: string;
    email: string;
}

export interface HTTPSHasuraIoJwtClaims {
    'x-hasura-default-role': string;
    'x-hasura-user-id': string;
    'x-hasura-allowed-roles': string[];
}

export interface RealmAccess {
    roles: string[];
}

export interface ResourceAccess {
    account: Account;
    hasura: Account;
}

export interface Account {
    roles: null[];
}

import { Injectable, Logger,Inject, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { FastifyRequest } from 'fastify';
import { gql } from 'graphql-request';
import { IncomingMessage } from 'http';
import { CallbackParamsType, Client, Issuer, TokenSet, UserinfoResponse, AuthorizationParameters, OpenIDCallbackChecks } from 'openid-client';
import {config} from '../config/index';
import { GqlSdk, InjectSdk } from '../sdk/sdk.module';

gql`
    mutation createUser($input: users_insert_input!) {
        insert_users_one(object: $input) {
            id
        }
    }

    query findUserByEmail($email: citext!) {
        users(where: { email: { _eq: $email } }) {
            id
            password_hash
        }
    }
`;

export interface LoginUserArgs {
    email: string;
    password: string;
}

export interface RegisterUserArgs {
    email: string;
    displayName?: string;
    password: string;
}

export interface LoginOrRegisterUserOutput {
    token?: string;
    error?: string;
}

export interface HasuraJwtClaims<CustomClaims extends Record<string, string | string[]> = {}> {
    'https://hasura.io/jwt/claims': {
        'x-hasura-default-role': string;
        'x-hasura-allowed-roles': string[];
    } & CustomClaims;
}

export type UserJwtClaims = HasuraJwtClaims<{ 'x-hasura-user-id': string }>;

@Injectable()
export class AuthService {
    openIdClient: Client
    private readonly logger = new Logger(AuthService.name);

    constructor(
        @InjectSdk() private readonly sdk: GqlSdk,
        private readonly jwtService: JwtService,
        @Inject('OIDC') openIdClient: Client
    ) {
        this.openIdClient = openIdClient
    }

    async getUserInfo(accessToken: string): Promise<any> {
        const userinfo: UserinfoResponse = await this.openIdClient.userinfo(accessToken);
        this.logger.log(userinfo)
        return userinfo;
    }

    async callback(request: IncomingMessage, checks: OpenIDCallbackChecks) {
        const params = this.openIdClient.callbackParams(request)
        return await this.openIdClient.callback(config.OPENID_CLIENT_REGISTRATION_LOGIN_REDIRECT_URI, params, checks);
    }

     getAuthorizationUrl(params: AuthorizationParameters){
        return this.openIdClient.authorizationUrl(params)
    }

    // public async login(args: LoginUserArgs): Promise<LoginOrRegisterUserOutput> {
    //     const { email } = args;
    //     const { users } = await this.sdk.findUserByEmail({
    //         email,
    //     });

    //     const foundUser = users?.[0];

    //     if (!foundUser) {
    //         return {
    //             error: `Could not find user for email ${email}`,
    //         };
    //     }

    //     return {};
    // }

    // public async registerUser(args: RegisterUserArgs): Promise<LoginOrRegisterUserOutput> {
    //     const {
    //         email,
    //         password,
    //         displayName = 'Apparently, this user prefers to keep an air of mystery about them',
    //     } = args;

    //     try {
    //         const { insert_users_one: user } = await this.sdk.createUser({
    //             input: {
    //                 email,
    //             },
    //         });

    //         const { id } = user;

    //         return {};
    //     } catch (e) {
    //         const error = (e?.message as string)?.includes('unique constraint "users_email_key"')
    //             ? 'That email address is already registered'
    //             : 'Something unexpected happened. Please try again later';

    //         return {
    //             error,
    //         };
    //     }
    // }

    // private signHasuraToken(userId: string) {
    //     const payload: UserJwtClaims = {
    //         'https://hasura.io/jwt/claims': {
    //             'x-hasura-allowed-roles': ['user'],
    //             'x-hasura-default-role': 'user',
    //             'x-hasura-user-id': String(userId),
    //         },
    //     };

    //     return this.jwtService.signAsync(payload);
    // }
}

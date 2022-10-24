import { Inject, Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { gql } from 'graphql-request';
import { IncomingMessage } from 'http';
import { PrismaService } from 'nestjs-prisma';
import {
    AuthorizationParameters,
    Client,
    Issuer,
    OpenIDCallbackChecks,
    UserinfoResponse,
} from 'openid-client';

import { config } from '../config/index';
import { GqlSdk, InjectSdk } from '../sdk/sdk.module';
import { CreateUserDto } from './dto/create-user';

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

export const buildOpenIdClient = async () => {
    const TrustIssuer = await Issuer.discover(
        `${process.env.OPENID_CLIENT_PROVIDER_OIDC_ISSUER}/.well-known/openid-configuration`
    );
    return new TrustIssuer.Client({
        client_id: process.env.OPENID_CLIENT_REGISTRATION_LOGIN_CLIENT_ID,
        client_secret: process.env.OPENID_CLIENT_REGISTRATION_LOGIN_CLIENT_SECRET,
    });
};

@Injectable()
export class AuthService {
    openIdClient: Client;
    private readonly logger = new Logger(AuthService.name);

    constructor(
        @InjectSdk() private readonly sdk: GqlSdk,
        private prisma: PrismaService,
        @Inject('OIDC') openIdClient: Client
    ) {
        this.openIdClient = openIdClient;
    }

    async getUserInfo(accessToken: string): Promise<any> {
        const userinfo: UserinfoResponse = await this.openIdClient.userinfo(accessToken);
        this.logger.log(userinfo);
        return userinfo;
    }

    async callback(request: IncomingMessage, checks: OpenIDCallbackChecks) {
        const params = this.openIdClient.callbackParams(request);
        return await this.openIdClient.callback(
            config.OPENID_CLIENT_REGISTRATION_LOGIN_REDIRECT_URI,
            params,
            checks
        );
    }

    getAuthorizationUrl(params: AuthorizationParameters) {
        return this.openIdClient.authorizationUrl(params);
    }

    /**
     * createUser
     */
    public createUser(input: CreateUserDto) {
        const userData = { ...input, channelName: input.name };

        return this.prisma.users.create({ data: userData });
    }
}

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Client, Issuer, CallbackParamsType, TokenSet, UserinfoResponse } from 'openid-client';

import { AuthService } from './auth.service';

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
export class OidcService {
    openIdClient: Client;

    constructor(client: Client) {
        this.openIdClient = client;
    }

    async validate(tokenset: TokenSet): Promise<any> {
        const userinfo: UserinfoResponse = await this.openIdClient.userinfo(tokenset);

        try {
            const id_token = tokenset.id_token;
            const access_token = tokenset.access_token;
            const refresh_token = tokenset.refresh_token;
            return {
                id_token,
                access_token,
                refresh_token,
                userinfo,
            };
        } catch (err) {
            throw new UnauthorizedException();
        }
    }

    async getIdToken(redirectUri: string, parameters: CallbackParamsType) {
        return await this.openIdClient.callback(redirectUri, parameters)
    }
}

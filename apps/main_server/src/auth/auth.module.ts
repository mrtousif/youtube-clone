import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
// import got from 'got';
import { JwksClient } from 'jwks-rsa';

import { config } from '../config/index';
import { SdkModule } from '../sdk/sdk.module';
import { AuthController } from './auth.controller';
import { AuthService, buildOpenIdClient } from './auth.service';
import { AuthResolver } from './auth.resolver';

const OidcFactory = {
    provide: 'OIDC',
    useFactory: async () => {
        return await buildOpenIdClient(); // secret sauce! build the dynamic client before injecting it into the strategy for use in the constructor super call.
    },
};

const client = new JwksClient({
    cache: true,
    cacheMaxEntries: 5,
    cacheMaxAge: 600000, // Defaults to 10m
    jwksUri: config.OPENID_CLIENT_PROVIDER_JWK_URL,
});

@Module({
    imports: [
        SdkModule,
        JwtModule.registerAsync({
            useFactory: async () => {
                const keys = await client.getSigningKeys();

                return {
                    publicKey: keys[0].getPublicKey(),
                    verifyOptions: {
                        algorithms: ['RS256'],
                    },
                };
            },
        }),
    ],
    controllers: [AuthController],
    providers: [OidcFactory, AuthService, AuthResolver],
    exports: [JwtModule],
})
export class AuthModule {}
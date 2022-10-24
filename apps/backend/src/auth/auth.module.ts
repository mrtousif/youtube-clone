import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
// import got from 'got';
import { JwksClient } from 'jwks-rsa';

import { config } from '../config/index';
import { EmailModule } from '../email/email.module';
import { SdkModule } from '../sdk/sdk.module';
import { AuthController } from './auth.controller';
import { AuthEventsService } from './auth.events.service';
import { AuthService, buildOpenIdClient } from './auth.service';

const OidcFactory = {
    provide: 'OIDC',
    useFactory: async () => {
        return await buildOpenIdClient(); // secret sauce! build the dynamic client before injecting it into the strategy for use in the constructor super call.
    },
};

const client = new JwksClient({
    cache: true, // Default Value
    cacheMaxEntries: 5, // Default value
    cacheMaxAge: 600000, // Defaults to 10m
    jwksUri:
        config.OPENID_CLIENT_PROVIDER_JWK_URL,
});

@Module({
    imports: [
        SdkModule,
        EmailModule,
        JwtModule.registerAsync({
            useFactory: async () => {
                // const { public_key } = await got
                //     .get(config.OPENID_CLIENT_PROVIDER_OIDC_ISSUER)
                //     .json<{ public_key: string }>();

                // const jwtSecret = `-----BEGIN PUBLIC KEY-----\n${public_key}\n-----END PUBLIC KEY-----`;
                const keys = await client.getSigningKeys();

                return {
                    secret: keys[0].getPublicKey(),
                    verifyOptions: {
                        algorithms: ['RS256'],
                    },
                };
            },
        }),
    ],
    controllers: [AuthController],
    providers: [OidcFactory, AuthService, AuthEventsService],
    exports: [JwtModule],
})
export class AuthModule {}

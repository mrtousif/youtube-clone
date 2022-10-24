import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import got from 'got';

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

@Module({
    imports: [
        SdkModule,
        EmailModule,
        JwtModule.registerAsync({
            useFactory: async () => {
                const { public_key } = await got
                    .get(config.OPENID_CLIENT_PROVIDER_OIDC_ISSUER)
                    .json<{ public_key: string }>();

                const jwtSecret = `-----BEGIN PUBLIC KEY-----\n${public_key}\n-----END PUBLIC KEY-----`;

                return {
                    secret: jwtSecret,
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

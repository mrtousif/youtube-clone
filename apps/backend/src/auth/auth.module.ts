import { Module } from '@nestjs/common';
import { EmailModule } from '../email/email.module';
import { SdkModule } from '../sdk/sdk.module';
import { AuthController } from './auth.controller';
import { AuthEventsService } from './auth.events.service';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

import { OidcService, buildOpenIdClient } from './oidc.strategy';

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
          inject: [ConfigService],
          useFactory: (configService: ConfigService) => {
            return {
              secret: configService.get<string>('DEV_JWT_SECRET'),
            };
          },
        }),
    ],
    controllers: [AuthController],
    providers: [OidcFactory, AuthService, AuthEventsService],
    exports: [JwtModule],
})
export class AuthModule {}

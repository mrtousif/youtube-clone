import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { EmailModule } from '../email/email.module';
import { SdkModule } from '../sdk/sdk.module';
import { AuthController } from './auth.controller';
import { AuthEventsService } from './auth.events.service';
import { AuthService } from './auth.service';
// import { JwtModule } from '@nestjs/jwt';
// import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';
import { OidcStrategy, buildOpenIdClient } from './oidc.strategy';
import { SessionSerializer } from './session.serializer';

const OidcStrategyFactory = {
    provide: 'OidcStrategy',
    useFactory: async (authService: AuthService) => {
        const client = await buildOpenIdClient(); // secret sauce! build the dynamic client before injecting it into the strategy for use in the constructor super call.
        return new OidcStrategy(authService, client);
    },
    inject: [AuthService],
};

@Module({
    imports: [
        SdkModule,
        EmailModule,
        // JwtModule.registerAsync({
        //   inject: [ConfigService],
        //   useFactory: (configService: ConfigService) => {
        //     return {
        //       secret: configService.get<string>('DEV_JWT_SECRET'),
        //     };
        //   },
        // }),
        PassportModule.register({ session: true, defaultStrategy: 'oidc' }),
    ],
    controllers: [AuthController],
    providers: [OidcStrategyFactory, SessionSerializer, AuthService, AuthEventsService],
})
export class AuthModule {}

import { FusionAuthClient } from '@fusionauth/typescript-client';
import { FactoryProvider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export const factory: FactoryProvider<FusionAuthClient> = {
    provide: FusionAuthClient,
    useFactory: (configService: ConfigService) => {
        return new FusionAuthClient(
            configService.get<string>('FUSIONAUTH_API_KEY'),
            configService.get<string>('FUSIONAUTH_URL')
        );
    },
    inject: [ConfigService],
};

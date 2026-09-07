import { FusionAuthClient } from '@fusionauth/typescript-client';
import { FactoryProvider } from '@nestjs/common';

import { Config, ENVALID } from '../config';

export const factory: FactoryProvider<FusionAuthClient> = {
    provide: FusionAuthClient,
    inject: [ENVALID],
    useFactory: (config: Config) => {
        return new FusionAuthClient(config.FUSIONAUTH_API_KEY, config.FUSIONAUTH_URL);
    },
};

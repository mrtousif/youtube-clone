import { makeValidators, num, str, Static } from 'nestjs-envalid';

export const validators = makeValidators({
    NODE_ENV: str({ choices: ['development', 'test', 'production', 'staging'] }),
    PORT: num({ default: 3000 }),
    NESTJS_EVENT_WEBHOOK_SHARED_SECRET: str(),
    HASURA_GRAPHQL_API_ENDPOINT: str(),
});

export type Config = Static<typeof validators>;

import { makeValidators, str,url, Static, port } from 'nestjs-envalid';

export const validators = makeValidators({
    NODE_ENV: str({ choices: ['development', 'test', 'production', 'staging'] }),
    NESTJS_EVENT_WEBHOOK_SHARED_SECRET: str(),
    HASURA_GRAPHQL_API_ENDPOINT: str(),
    S3_REGION: str(),
    S3_ENDPOINT: url(),
    S3_BUCKET: str(),
    API_PORT: port({ default: 3000 })
});

export type Config = Static<typeof validators>;

import { cleanEnv, port, str, url } from 'envalid';

export const config = cleanEnv(process.env, {
    NODE_ENV: str({ choices: ['development', 'test', 'production', 'staging', 'qa'] }),
    REDIS_URL: str({ devDefault: '6379' }),
    NESTJS_EVENT_WEBHOOK_SHARED_SECRET: str(),
    HASURA_GRAPHQL_API_ENDPOINT: str(),
    SENTRY_DSN: url({ default: '' }),
    S3_REGION: str(),
    S3_ENDPOINT: url(),
    S3_BUCKET: str(),
    PORT: port({ default: 3000 }),
    S3_ACCESS_KEY_ID: str(),
    S3_SECRET_ACCESS_KEY: str(),
    RABBIT_MQ_HOST: str(),
    OPENID_CLIENT_PROVIDER_OIDC_ISSUER: str(),
    OPENID_CLIENT_REGISTRATION_LOGIN_POST_LOGOUT_REDIRECT_URI: str(),
    OPENID_CLIENT_REGISTRATION_LOGIN_REDIRECT_URI: str(),
    OPENID_CLIENT_REGISTRATION_LOGIN_CLIENT_SECRET: str(),
    OPENID_CLIENT_REGISTRATION_LOGIN_CLIENT_ID: str(),
});

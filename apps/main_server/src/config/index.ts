import { cleanEnv, email, port, str, url } from 'envalid';
import { Static, makeValidators,  } from 'nestjs-envalid';
export { ENVALID } from 'nestjs-envalid';

const ENVS = {
    NODE_ENV: str({ choices: ['development', 'test', 'production', 'staging', 'qa'] }),
    REDIS_URL: str({ devDefault: '6379' }),
    NESTJS_EVENT_WEBHOOK_SHARED_SECRET: str(),
    HASURA_GRAPHQL_API_ENDPOINT: str(),
    HASURA_GRAPHQL_ADMIN_SECRET: str(),
    SENTRY_DSN: url({ default: '' }),
    S3_REGION: str(),
    S3_ENDPOINT: url(),
    S3_BUCKET: str(),
    PORT: port({ default: 3000 }),
    S3_ACCESS_KEY_ID: str(),
    S3_SECRET_ACCESS_KEY: str(),
    RABBIT_MQ_HOST: str(),
    OPENID_CLIENT_PROVIDER_OIDC_ISSUER: str(),
    OPENID_CLIENT_REGISTRATION_LOGIN_POST_LOGOUT_REDIRECT_URI: url(),
    OPENID_CLIENT_REGISTRATION_LOGIN_REDIRECT_URI: url(),
    OPENID_CLIENT_REGISTRATION_LOGIN_CLIENT_SECRET: str(),
    OPENID_CLIENT_REGISTRATION_LOGIN_CLIENT_ID: str(),
    OPENID_CLIENT_PROVIDER_JWK_URL: url(),
    COOKIE_SECRET: str(),
    SESSION_SECRET: str(),
    EMAIL_HOST: str({ devDefault: 'localhost' }),
    EMAIL_USERNAME: str(),
    EMAIL_PASSWORD: str(),
    EMAIL_SENDER_ID: email({ devDefault: 'admin@localhost.com' }),
    FUSIONAUTH_API_KEY: str(),
    FUSIONAUTH_URL: url()
};

export const config = cleanEnv(process.env, ENVS);

export const validators = makeValidators(ENVS);

export type Config = Static<typeof validators>;

import { cleanEnv, port, str, url } from 'envalid';

export const config = cleanEnv(process.env, {
    NODE_ENV: str({ choices: ['development', 'test', 'production', 'staging'] }),
    S3_REGION: str(),
    S3_ENDPOINT: url(),
    S3_BUCKET: str(),
    PORT: port({ devDefault: 3000 }),
    S3_ACCESS_KEY_ID: str(),
    S3_SECRET_ACCESS_KEY: str(),
    RABBIT_MQ_HOST: str(),
});

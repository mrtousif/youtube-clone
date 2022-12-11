import got, { Got } from 'got';
import { cleanEnv, str, url } from 'envalid';

const env = cleanEnv(process.env, {
    HASURA_GRAPHQL_ADMIN_SECRET: str(),
    HASURA_GRAPHQL_API_ENDPOINT: url(),
});

export class Hasura {
    public got: Got;
    constructor() {
        this.got = got.extend({
            prefixUrl: env.HASURA_GRAPHQL_API_ENDPOINT,
            headers: {
                'Content-Type': 'application/json',
                'x-hasura-admin-secret': env.HASURA_GRAPHQL_ADMIN_SECRET,
            },
        });
    }

    async refreshSchema() {
        const jsonBody = {
            type: 'reload_remote_schema',
            args: {
                name: 'nestjs',
            },
        };

        return await this.got.post('query', { json: jsonBody }).json();
    }
}

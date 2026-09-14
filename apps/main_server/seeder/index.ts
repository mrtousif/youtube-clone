import { faker } from '@faker-js/faker';
import { randomUUID } from 'crypto';
import { CamelCasePlugin, Kysely, PostgresDialect } from 'kysely';
import { DB } from 'kysely-codegen';
import { sample } from 'lodash';
import { Pool } from 'pg';

const db = new Kysely<DB>({
    dialect: new PostgresDialect({
        pool: new Pool({
            connectionString: process.env.DATABASE_URL,
        }),
    }),
    plugins: [new CamelCasePlugin()],
    log: ['error', 'query'],
});

const userIds = [...Array(10).keys()].map(() => ({
    authId: randomUUID(),
}));

async function main() {
    const users = await db
        .insertInto('users')
        .values(
            userIds.map(({ authId }) => ({
                authId,
                email: faker.internet.email(),
                name: faker.name.fullName(),
                phone: faker.phone.number(),
                channelName: faker.helpers.unique(faker.random.word),
                description: faker.random.words(5),
            }))
        )
        .returning('id')
        .execute();
    const videos = await db
        .insertInto('videos')
        .values(
            users.map(({ id }) => ({
                channelId: id,
                streamUrl: faker.internet.url(),
                thumbnail: faker.random.alphaNumeric(36),
                title: faker.random.words(5),
            }))
        )
        .returningAll()
        .execute();

    const feelings = await db
        .insertInto('feelings')
        .values(
            videos.map(({ id, channelId }) => {
                const reaction = sample(['LIKE', 'DISLIKE']);

                return {
                    userId: channelId,
                    videoId: id,
                    reaction,
                };
            })
        )
        .execute();

    console.log(users, videos, feelings);
}

main().catch(async (e) => {
    console.error(e);

    process.exit(1);
});

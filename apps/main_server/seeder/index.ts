import { faker } from '@faker-js/faker';
import { randomUUID } from 'crypto';
import { Kysely, PostgresDialect } from 'kysely';
import { DB } from 'kysely-codegen';
import { sample } from 'lodash';
import { Pool } from 'pg';

const db = new Kysely<DB>({
    dialect: new PostgresDialect({
        pool: new Pool({
            connectionString: process.env.DATABASE_URL,
        }),
    }),
});

const userIds = [...Array(10).keys()].map(() => ({
    id: randomUUID(),
}));
const videoIds = [...Array(10).keys()].map((_v, i) => ({
    id: randomUUID(),
    channelId: userIds[i].id,
}));

async function main() {
    const users = await db
        .insertInto('users')
        .values(
            userIds.map(({ id }) => ({
                id,
                email: faker.internet.email(),
                name: faker.name.fullName(),
                phone: faker.phone.number(),
                channelName: faker.helpers.unique(faker.random.word),
                description: faker.random.words(5),
            }))
        )
        .execute();
    const videos = await db
        .insertInto('videos')
        .values(
            videoIds.map(({ id, channelId }) => ({
                id,
                channelId,
                streamUrl: faker.internet.url(),
                thumbnail: faker.random.alphaNumeric(36),
                title: faker.random.words(5),
            }))
        )
        .execute();

    const feelings = await db
        .insertInto('feelings')
        .values(
            videoIds.map(({ id, channelId }) => {
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

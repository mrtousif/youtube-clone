import { randomUUID  } from "crypto";
import { faker } from '@faker-js/faker';
import { PrismaClient, reaction_types } from '@prisma/client';
import { sample } from "lodash";

const prisma = new PrismaClient();

const userIds = [...Array(10).keys()].map(()=> ({
    id: randomUUID()
}))
const videoIds = [...Array(10).keys()].map((_v, i)=> ({
    id: randomUUID(),
    channelId: userIds[i].id
}))

async function main() {
    const users = await prisma.users.createMany({
            data: userIds.map(({ id }) => ({
                id,
                email: faker.internet.email(),
                name: faker.name.fullName(),
                phone: faker.phone.number(),
                channelName: faker.unique(faker.random.word),
                description: faker.random.words(5),
            }))
        }
    );

    const videos = await prisma.videos.createMany({
        data: videoIds.map(({id, channelId}) => ({
            id,
            channelId,
            streamUrl: faker.internet.url(),
            thumbnail: faker.random.alphaNumeric(36),
            title: faker.random.words(5),
        }))
    });

    const feelings = await prisma.feelings.createMany({
        data: videoIds.map(({id, channelId}) => {
            const reaction: reaction_types = sample(['LIKE', 'DISLIKE'])

            return {
                userId: channelId,
                videoId: id,
                reaction
            };
        })
    });
    
    console.log(users, videos, feelings);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });

import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
import { range } from "lodash";

const prisma = new PrismaClient();

async function main() {
    [...Array(5).keys()].map(async (_item) => {
        await prisma.users.create({
            data: {
                email: faker.internet.email(),
                name: faker.name.fullName(),
                phone: faker.phone.number(),
                channel_name: faker.random.word(),
                description: faker.random.words(5),
                videos: {
                    create: range(0, 2).map(()=> ({
                        stream_url: faker.internet.url(),
                        thumbnail: faker.random.alphaNumeric(64),
                        title: faker.random.words(5),
                    }))
                },
            },
        });
    });
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

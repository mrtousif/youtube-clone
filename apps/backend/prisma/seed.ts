import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient()

async function main() {
  const newUser = [...Array(5).keys()].map(async _item => await prisma.users.create({
    data: {
      email: faker.internet.email(),
      name: faker.name.findName(),
      phone: faker.phone.number(),
      channel_name: faker.name.findName()
    }
  }))

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
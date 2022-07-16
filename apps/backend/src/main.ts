import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { PrismaService, PrismaClientExceptionFilter } from 'nestjs-prisma';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter({
            logger: true,
        })
    );
    const prismaService: PrismaService = app.get(PrismaService);
    prismaService.enableShutdownHooks(app);

    const { httpAdapter } = app.get(HttpAdapterHost);
    app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));

    await app.listen(3000);
}
bootstrap();

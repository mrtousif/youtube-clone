import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import fastifyCookie from '@fastify/cookie';
import secureSession from '@fastify/secure-session';
import { ClsMiddleware } from 'nestjs-cls';
import { Logger, LoggerErrorInterceptor } from 'nestjs-pino';
import { PrismaClientExceptionFilter, PrismaService } from 'nestjs-prisma';

import { AppModule } from './app.module';
import { config } from './config';

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter({
            trustProxy: true,
        }),
        { bufferLogs: true }
    );
    app.connectMicroservice<MicroserviceOptions>({
        transport: Transport.RMQ,
        options: {
            urls: [config.RABBIT_MQ_HOST],
            queue: 'backend_queue',
            queueOptions: {
                durable: true,
            },
        },
    });
    await app.register(fastifyCookie, {
        secret: config.COOKIE_SECRET, // for cookies signature
      });

    await app.register(secureSession, {
        secret: config.SESSION_SECRET,
        salt: 'mq9hDxBVDbspDR6n',
    });

    app.use(
        new ClsMiddleware({
            useEnterWith: true,
        }).use
    );

    const prismaService: PrismaService = app.get(PrismaService);
    prismaService.enableShutdownHooks(app);

    const { httpAdapter } = app.get(HttpAdapterHost);

    app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));

    if (config.isProduction) {
        app.useLogger(app.get(Logger));
        // app.useGlobalInterceptors(new LoggerErrorInterceptor());
    }

    await app.startAllMicroservices();
    await app.listen(config.PORT);
}
bootstrap();

import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { Transport } from '@nestjs/microservices';
import { ClsMiddleware } from 'nestjs-cls';
import { LoggerErrorInterceptor, Logger } from 'nestjs-pino';
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
    app.connectMicroservice({
        transport: Transport.RMQ,
        options: {
            urls: [config.RABBIT_MQ_HOST],
            queue: 'backend_queue',
            queueOptions: {
                durable: true
            }
        }
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

    if(config.isProduction){
        app.useLogger(app.get(Logger));
        app.useGlobalInterceptors(new LoggerErrorInterceptor());
    }

    await app.startAllMicroservices();
    await app.listen(config.PORT);
}
bootstrap();

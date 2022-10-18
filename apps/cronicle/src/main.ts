import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './app.module';
import { config } from './config';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.RMQ,
        options: {
            urls: [config.RABBIT_MQ_HOST],
            queue: 'notifier_queue',
            queueOptions: {
                durable: true,
            },
        },
    });

    await app.listen();
}
bootstrap();

import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { MicroserviceOptions, CustomStrategy } from '@nestjs/microservices';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import fastifyCookie from '@fastify/cookie';
import secureSession from '@fastify/secure-session';
import { ClsMiddleware } from 'nestjs-cls';
import { Logger, LoggerErrorInterceptor } from 'nestjs-pino';
import { NatsJetStreamServer } from '@nestjs-plugins/nestjs-nats-jetstream-transport';

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
    const options: CustomStrategy = {
        strategy: new NatsJetStreamServer({
          connectionOptions: {
            servers: 'localhost:4222',
            name: 'myservice-listener',
          },
          consumerOptions: {
            deliverGroup: 'myservice-group',
            durable: 'myservice-durable',
            deliverTo: 'myservice-messages',
            manualAck: true,
          },
          streamConfig: {
            name: 'mystream',
            subjects: ['order.*'],
          },
        }),
      };

    app.connectMicroservice<MicroserviceOptions>(options);
    
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

    const { httpAdapter } = app.get(HttpAdapterHost);

    if (config.isProduction) {
        app.useLogger(app.get(Logger));
        app.useGlobalInterceptors(new LoggerErrorInterceptor());
    }

    await app.startAllMicroservices();
    await app.listen(config.PORT);
    console.log(`Running on port ${config.PORT}`);
}
bootstrap();

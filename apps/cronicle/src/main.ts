import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, CustomStrategy } from '@nestjs/microservices';
import { NatsJetStreamServer } from '@nestjs-plugins/nestjs-nats-jetstream-transport';
import { AppModule } from './app.module';
import { config } from './config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

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

    await app.startAllMicroservices();
    await app.listen(config.PORT);
}
bootstrap();

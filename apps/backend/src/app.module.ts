import { RequestMethod, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ScheduleModule } from '@nestjs/schedule';
import { PrismaModule } from 'nestjs-prisma';
import { HasuraModule, HasuraModuleConfig } from '@golevelup/nestjs-hasura';
import { join } from 'path';
import { LoggerModule } from 'nestjs-pino';
import { PrometheusModule } from "@willsoto/nestjs-prometheus";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SdkModule } from './sdk/sdk.module';
import { ItemModule } from './item/item.module';
import { EmailModule } from './email/email.module';
import { ClsModule } from 'nestjs-cls';
import { config } from './config';
import { PrismaConfigService } from './PrismaConfigService';
import { FileStorageService } from './file-storage/file-storage.service';
import { HealthModule } from './health/health.module';

@Module({
    imports: [
        SdkModule,
        ItemModule,
        EmailModule,
        HealthModule,
        AuthModule,
        PrometheusModule.register(),
        LoggerModule.forRoot({
            pinoHttp: {
                level: process.env.NODE_ENV !== 'production' ? 'debug' : 'info',
                transport:
                  process.env.NODE_ENV !== 'production'
                    ? { target: 'pino-pretty' }
                    : undefined,
              },
            exclude: [{ method: RequestMethod.ALL, path: 'check' }]
        }),
        ClsModule.register({
            global: true,
        }),
        PrismaModule.forRootAsync({
            isGlobal: true,
            useClass: PrismaConfigService,
        }),
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        GraphQLModule.forRoot<MercuriusDriverConfig>({
            driver: MercuriusDriver,
            graphiql: true,
            autoSchemaFile: true,
            allowBatchedQueries: true,
        }),
        EventEmitterModule.forRoot(),
        ScheduleModule.forRoot(),
        HasuraModule.forRootAsync(HasuraModule, {
            useFactory: () => {
                const webhookSecret = config.NESTJS_EVENT_WEBHOOK_SHARED_SECRET;
                const environment = config.NODE_ENV;

                return {
                    webhookConfig: {
                        secretFactory: webhookSecret,
                        secretHeader: 'nestjs-event-webhook',
                    },
                    managedMetaDataConfig:
                        environment === 'development'
                            ? {
                                  metadataVersion: 'v3',
                                  dirPath: join(process.cwd(), 'hasura/metadata'),
                                  nestEndpointEnvName: 'NESTJS_EVENT_WEBHOOK_ENDPOINT',
                                  secretHeaderEnvName: 'NESTJS_EVENT_WEBHOOK_SHARED_SECRET',
                                  defaultEventRetryConfig: {
                                      numRetries: 3,
                                      timeoutInSeconds: 100,
                                      intervalInSeconds: 30,
                                      toleranceSeconds: 21600,
                                  },
                              }
                            : undefined,
                };
            },
        }),
    ],
    controllers: [AppController],
    providers: [AppService, FileStorageService],
})
export class AppModule {}

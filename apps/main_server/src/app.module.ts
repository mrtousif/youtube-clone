import { join } from 'path';
import { HasuraModule, HasuraModuleConfig } from '@golevelup/nestjs-hasura';
import { Module, RequestMethod } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { ClsModule } from 'nestjs-cls';
import { PrismaModule } from 'nestjs-prisma';
import { LoggerModule } from 'nestjs-pino';
import { createWriteStream } from 'pino-sentry';

import { PrismaConfigService } from './PrismaConfigService';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { config } from './config';
import { EmailModule } from './email/email.module';
import { FileStorageService } from './file-storage/file-storage.service';
import { HealthModule } from './health/health.module';
import { ItemModule } from './item/item.module';
import { SdkModule } from './sdk/sdk.module';

@Module({
    imports: [
        SdkModule,
        ItemModule,
        EmailModule,
        HealthModule,
        AuthModule,
        PrometheusModule.register(),
        LoggerModule.forRootAsync({
            useFactory: async () => {
                const stream = createWriteStream({ 
                    dsn: config.SENTRY_DSN
                });

                return {
                    pinoHttp: {
                        level: !config.isProd ? 'debug' : 'info',
                        transport:
                            config.isDev ? { target: 'pino-pretty' } : undefined,
                        stream,
                    },
                    exclude: [{ method: RequestMethod.ALL, path: 'check' }],
                };
            },
        }),
        ClsModule.forRoot({
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
        HasuraModule.forRootAsync(HasuraModule, {
            useFactory: () => {
                const webhookSecret = config.NESTJS_EVENT_WEBHOOK_SHARED_SECRET;

                return {
                    webhookConfig: {
                        secretFactory: webhookSecret,
                        secretHeader: 'nestjs-event-webhook',
                    },
                    managedMetaDataConfig:
                        config.isDev
                            ? {
                                  metadataVersion: 'v3',
                                  dirPath: join(process.cwd(), '../hasura/metadata'),
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

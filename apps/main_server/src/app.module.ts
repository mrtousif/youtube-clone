import { HasuraModule, HasuraModuleConfig } from '@golevelup/nestjs-hasura';
import { Module, RequestMethod } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { MailmanModule, MailmanOptions } from '@squareboat/nest-mailman';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { ClsModule } from 'nestjs-cls';
import { LoggerModule } from 'nestjs-pino';
import { PrismaModule } from 'nestjs-prisma';
import { join } from 'path';

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
                return {
                    pinoHttp: {
                        level: !config.isProd ? 'debug' : 'info',
                        transport: config.isDev ? { target: 'pino-pretty' } : undefined,
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
        MailmanModule.registerAsync({
            useFactory: () => ({
                host: config.EMAIL_HOST,
                port: 2525,
                username: config.EMAIL_USERNAME,
                password: config.EMAIL_PASSWORD,
                from: config.EMAIL_SENDER_ID,
                path: join(process.cwd(), '/resources/mails'),
            }),
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
                    managedMetaDataConfig: config.isDev
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

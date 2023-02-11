import { join } from 'path';
import { HasuraModule, HasuraModuleConfig } from '@golevelup/nestjs-hasura';
import { Module, RequestMethod } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
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
        HasuraModule.forRoot(HasuraModule, {
            webhookConfig: {
              secretFactory: 'secret',
              secretHeader: 'secretHeader',
            },
            managedMetaDataConfig: {
              dirPath: join(process.cwd(), 'hasura/metadata'),
              secretHeaderEnvName: 'HASURA_NESTJS_WEBHOOK_SECRET_HEADER_VALUE',
              nestEndpointEnvName: 'NESTJS_EVENT_WEBHOOK_ENDPOINT',
              defaultEventRetryConfig: {
                intervalInSeconds: 15,
                numRetries: 3,
                timeoutInSeconds: 100,
                toleranceSeconds: 21600,
              },
            },
          }),
    ],
    controllers: [AppController],
    providers: [AppService, FileStorageService],
})
export class AppModule {}

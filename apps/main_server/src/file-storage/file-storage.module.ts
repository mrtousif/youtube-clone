import { Module } from '@nestjs/common';
import { S3Module } from 'nestjs-s3';

import { FileStorageService } from './file-storage.service';

@Module({
    imports: [
        S3Module.forRoot({
            config: {
                credentials: {
                    accessKeyId: 'minio',
                    secretAccessKey: 'password',
                },
                // region: 'us-east-1',
                endpoint: 'http://127.0.0.1:9000',
                forcePathStyle: true,
            },
        }),
    ],
    providers: [FileStorageService],
    exports: [FileStorageService],
})
export class EmailModule {}

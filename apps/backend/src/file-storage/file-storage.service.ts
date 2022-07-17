import { Injectable, Inject } from '@nestjs/common';
import { S3Client, AbortMultipartUploadCommand } from '@aws-sdk/client-s3';
import { ENVALID } from 'nestjs-envalid';
import { Config } from '../config';

@Injectable()
export class FileStorageService {
    private S3: S3Client;

    constructor(@Inject(ENVALID) private readonly env: Config) {
        this.S3 = new S3Client({
            region: this.env.S3_REGION,
            endpoint: this.env.S3_ENDPOINT,
            logger: console,
        });
    }

    async upload(key: string, uploadId: string) {
        const params = {
            Bucket: this.env.S3_BUCKET,
            Key: key,
            UploadId: uploadId,
        };
        const command = new AbortMultipartUploadCommand(params);
        return this.S3.send(command);
    }

    destroy() {
        return this.S3.destroy();
    }
}

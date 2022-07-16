import { Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { PrismaOptionsFactory, PrismaServiceOptions } from 'nestjs-prisma';
// import { ENVALID, EnvalidModule } from 'nestjs-envalid';
// import { Config } from './config';
// import { Prisma } from '@prisma/client';

// export function loggingMiddleware(): Prisma.Middleware {
//     return async (params, next) => {
//         const before = Date.now();

//         const result = await next(params);

//         const after = Date.now();

//         console.log(`Query ${params.model}.${params.action} took ${after - before}ms`);

//         return result;
//     };
// }

@Injectable()
export class PrismaConfigService implements PrismaOptionsFactory {
    constructor() {
        // TODO inject any other service here like the `ConfigService`
    }

    createPrismaOptions(): PrismaServiceOptions | Promise<PrismaServiceOptions> {
        return {
            prismaOptions: {
                log: ['info', 'query'],
            },
            explicitConnect: true,
            // middlewares: [loggingMiddleware()],
        };
    }
}

import { Injectable } from '@nestjs/common';
import { PrismaOptionsFactory, PrismaServiceOptions } from 'nestjs-prisma';
import { config } from './config';
import { createPrismaRedisCache } from "prisma-redis-middleware";
import Redis from "ioredis";

const redis = new Redis();

export function loggingMiddleware() {
    return async (params, next) => {
        const before = Date.now();

        const result = await next(params);

        const after = Date.now();

        console.log(`Query ${params.model}.${params.action} took ${after - before}ms`);

        return result;
    };
}

const cacheMiddleware = () => createPrismaRedisCache({
    models: [
      { model: "Users" },
      { model: "Videos", cacheTime: 180 },
    ],
    storage: { type: "redis", options: { client: redis, invalidation: { referencesTTL: 300 }, log: console } },
    cacheTime: 3000,
    excludeModels: ["Product", "Cart"],
    excludeMethods: ["count", "groupBy"],
  })

@Injectable()
export class PrismaConfigService implements PrismaOptionsFactory {
    createPrismaOptions(): PrismaServiceOptions | Promise<PrismaServiceOptions> {
        return {
            prismaOptions: {
                log: ['info', 'query'],
            },
            explicitConnect: true,
            middlewares: [loggingMiddleware(), cacheMiddleware()],
        };
    }
}

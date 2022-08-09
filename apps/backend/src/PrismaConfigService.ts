import { Injectable } from '@nestjs/common';
import { PrismaOptionsFactory, PrismaServiceOptions } from 'nestjs-prisma';
import { ENVALID, EnvalidModule } from 'nestjs-envalid';
import { Config } from './config';
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
      { model: "User", excludeMethods: ["findMany"] },
      { model: "Video", cacheTime: 180, cacheKey: "article" },
    ],
    storage: { type: "redis", options: { client: redis, invalidation: { referencesTTL: 300 }, log: console } },
    cacheTime: 300,
    excludeModels: ["Product", "Cart"],
    excludeMethods: ["count", "groupBy"],
    onHit: (key) => {
      console.log("hit", key);
    },
    onMiss: (key) => {
      console.log("miss", key);
    },
    onError: (key) => {
      console.log("error", key);
    },
  })

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
            middlewares: [loggingMiddleware(), cacheMiddleware()],
        };
    }
}

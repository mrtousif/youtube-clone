import { Injectable } from '@nestjs/common';
import { PrismaOptionsFactory, PrismaServiceOptions } from 'nestjs-prisma';
import { config } from './config';
import { createPrismaRedisCache } from "prisma-redis-middleware";
import Redis from "ioredis";
import consola from "consola";

const redis = new Redis();

export function loggingMiddleware() {
    return async (params, next) => {
        const before = Date.now();

        const result = await next(params);

        const after = Date.now();

        consola.log(`Query ${params.model}.${params.action} took ${after - before}ms`);

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
      consola.log("hit", key);
    },
    onMiss: (key) => {
      consola.log("miss", key);
    },
    onError: (key) => {
      consola.error("error", key);
    },
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

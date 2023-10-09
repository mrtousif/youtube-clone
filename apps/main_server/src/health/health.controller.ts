import { Controller, Get } from '@nestjs/common';
import { HealthCheck, HealthCheckService, MemoryHealthIndicator } from '@nestjs/terminus';

import { PostgresHealthIndicator } from './postgres.health';

@Controller('healthz')
export class HealthController {
    constructor(
        private healthCheckService: HealthCheckService,
        private memory: MemoryHealthIndicator,
        private db: PostgresHealthIndicator
    ) {}

    @Get()
    @HealthCheck()
    checkHealth() {
        return this.healthCheckService.check([
            () => this.memory.checkHeap('memory_heap', 150 * 1024 * 1024),
            () => this.db.isHealthy('database'),
        ]);
    }
}

import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';

import { HealthController } from './health.controller';
import { PostgresHealthIndicator } from './prisma.health';

@Module({
    imports: [TerminusModule],
    controllers: [HealthController],
    providers: [PostgresHealthIndicator],
})
export class HealthModule {}

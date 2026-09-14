import { Injectable } from '@nestjs/common';
import { HealthCheckError, HealthIndicator, HealthIndicatorResult } from '@nestjs/terminus';
import { Kysely } from 'kysely';
import { sql } from 'kysely';
import { DB } from 'kysely-codegen';
import { InjectKysely } from 'nestjs-kysely';

@Injectable()
export class PostgresHealthIndicator extends HealthIndicator {
    constructor(@InjectKysely() private readonly db: Kysely<DB>) {
        super();
    }

    async isHealthy(key: string): Promise<HealthIndicatorResult> {
        try {
            await sql`SELECT 1`.execute(this.db);
            return this.getStatus(key, true);
        } catch (e) {
            throw new HealthCheckError('Postgres check failed', e);
        }
    }
}

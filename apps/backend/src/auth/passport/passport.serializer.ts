/* eslint-disable @typescript-eslint/member-ordering */
import passport from '@fastify/passport';
import type { FastifyRequest } from 'fastify';

export abstract class PassportSerializer {
    abstract userSerializer(user: unknown, request: FastifyRequest): Promise<any>;
    abstract userDeserializer(payload: unknown, request: FastifyRequest): Promise<any>;

    constructor() {
        const passportInstance = this.getPassportInstance();

        passportInstance.registerUserSerializer(
            async (user: Record<string, unknown>, request: FastifyRequest) => {
                return await this.userSerializer(user, request);
            }
        );
        passportInstance.registerUserDeserializer(
            async (payload: string, request: FastifyRequest) => {
                return this.userDeserializer(payload, request);
            }
        );
    }

    getPassportInstance() {
        return passport;
    }
}

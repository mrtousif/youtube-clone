import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { FastifyRequest } from 'fastify';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class JwtGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService) {}

    canActivate(context: ExecutionContext): boolean {
        const request = this.getRequest<FastifyRequest & { user?: Record<string, unknown> }>(
            context
        );

        try {
            const token = this.getToken(request);
            const user = this.jwtService.verify(token);
            request.user = user;
            return true;
        } catch (e) {
            // return false or throw a specific error if desired
            return false;
        }
    }

    protected getRequest<T>(context: ExecutionContext): T {
        return context.switchToHttp().getRequest();
    }

    protected getToken(request: { headers: Record<string, string | string[]> }): string {
        const authorization = request.headers['authorization'];
        if (!authorization || Array.isArray(authorization)) {
            throw new Error('Invalid Authorization Header');
        }
        const [_, token] = authorization.split(' ');
        return token;
    }
}

@Injectable()
export class GqlJwtAuthGuard extends JwtGuard {
    getRequest(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context);
        return ctx.getContext().req;
    }
}
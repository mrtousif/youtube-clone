import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
  } from '@nestjs/common';
import { ClsService } from 'nestjs-cls';
import { Observable } from 'rxjs';

@Injectable()
export class UserIpInterceptor implements NestInterceptor {
    constructor(
        // Inject the ClsService into the interceptor to get
        // access to the current shared cls context.
        private readonly cls: ClsService,
    ) {}

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        // Extract the client's ip address from the request...
        const request = context.switchToHttp().getRequest();
        const userIp = request.connection.remoteAddress;
        // ...and store it to the cls context.
        this.cls.set('ip', userIp);
        return next.handle();
    }
}

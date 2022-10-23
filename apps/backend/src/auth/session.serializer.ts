import { Injectable } from '@nestjs/common';  
import { PassportSerializer } from "./passport/passport.serializer";
@Injectable()
export class SessionSerializer extends PassportSerializer {
    userSerializer(user: any, done: (err: Error, user: any) => void): any {
        done(null, user);
    }

    userDeserializer(payload: any, done: (err: Error, payload: string) => void): any {
        done(null, payload);
    }
}

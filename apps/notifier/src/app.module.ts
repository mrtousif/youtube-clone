import { Module } from "@nestjs/common";
import { EnvalidModule } from "nestjs-envalid";
import { validators } from "./config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
    imports: [EnvalidModule.forRoot({ validators })],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

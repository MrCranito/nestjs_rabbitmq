import { Module } from "@nestjs/common";
import { LoggerController } from "./controller/logger.controller";
import { LoggerService } from "./service/logger.service";

@Module({
    imports: [],
    controllers: [LoggerController],
    providers: [LoggerService],
    exports: [LoggerService],
})
export class LoggerModule {}
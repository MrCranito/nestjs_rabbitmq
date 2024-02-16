import { Controller } from "@nestjs/common";
import { MessagePattern, Payload, Ctx, RmqContext } from "@nestjs/microservices";
import { LoggerService } from "../service/logger.service";

@Controller('logger')
export class LoggerController {

    constructor(private service: LoggerService) {}

    @MessagePattern('rabbit-mq-producer')
    public async execute(
      @Payload() data: any,
      @Ctx() context: RmqContext
    ) {
        return this.service.log(data);
    }
  
}
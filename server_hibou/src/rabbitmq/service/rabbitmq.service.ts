import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
@Injectable()
export class RabbitMQService {
  constructor(
    @Inject('rabbit-mq-module') private readonly client: ClientProxy,
  ) {}
  public send(pattern: string, data: any) {
    const producer = this.client.send(pattern, data);

    return producer.subscribe();
  }
}
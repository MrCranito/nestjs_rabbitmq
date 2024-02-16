import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqp://admin_hibou:admin_hibou@rabbitmq_hibou:5672',
      ],
      queue: 'rabbit-mq-nest-js',
    },
  });

  await app.listen();
}
bootstrap();

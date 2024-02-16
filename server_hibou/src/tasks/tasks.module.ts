import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Task } from './entity/task.entity';
import { TaskController } from './controller/task.controller';
import { TaskService } from './service/task.service';
import { RabbitMQModule } from './../rabbitmq/rabbitmq.module';

@Module({
  imports: [TypeOrmModule.forFeature([Task]), RabbitMQModule],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TasksModule {} 
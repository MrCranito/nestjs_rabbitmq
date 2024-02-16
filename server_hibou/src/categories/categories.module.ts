import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entity/category.entity';
import { Module } from '@nestjs/common';
import { CategoryService } from './service/category.service';
import { CategoryController } from './controller/category.controller';
import { RabbitMQModule } from './../rabbitmq/rabbitmq.module';

@Module({
  imports: [TypeOrmModule.forFeature([Category]), RabbitMQModule],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoriesModule {}
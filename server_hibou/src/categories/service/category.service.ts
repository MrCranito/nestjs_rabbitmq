import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "../entity/category.entity";
import { Repository } from 'typeorm';
import { Injectable } from "@nestjs/common";
import { RabbitMQService } from "./../../rabbitmq/service/rabbitmq.service";

@Injectable()
export class CategoryService {
    constructor(
      @InjectRepository(Category)
      private repository: Repository<Category>,
      private readonly rabbitMQService: RabbitMQService,
    ) {}

    async getAll(): Promise<Category[]> {
        return this.repository.find();
    }

    async create(body: Category): Promise<Category> {
        const category: Category = await this.repository.save(body);  
        this.rabbitMQService.send('rabbit-mq-producer', {
            message: 'ADD CATEGORY, [POST], ' + category.id,
        }); 
        return category
    }

    async update(category: Category): Promise<Category> {
        return this.repository.save(category);
    }

    async delete(id: string): Promise<void> {
        this.rabbitMQService.send('rabbit-mq-producer', {
            message: 'ADD CATEGORY, [DELETE], ' + id,
        });
        await this.repository.softDelete(id);
    }
}
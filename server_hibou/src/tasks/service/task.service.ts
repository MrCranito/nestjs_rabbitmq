import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { Task } from "../entity/task.entity";
import { Injectable } from "@nestjs/common";
import { RabbitMQService } from "./../../rabbitmq/service/rabbitmq.service";

@Injectable()
export class TaskService {
    constructor(
      @InjectRepository(Task)
      private repository: Repository<Task>,
      private rabbitMQService: RabbitMQService,
    ) {}

    async getAll(): Promise<Task[]> {
        return this.repository.find({ relations: ['category']});
    }

    async create(body: Task): Promise<Task> {

        const task: Task = await this.repository.save(body);
        this.rabbitMQService.send('rabbit-mq-producer', {
            message: 'ADD TASK, [POST], ' + task.id,
        });
        return task;
    }

    async update(task: Task): Promise<Task> {
        return this.repository.save(task);
    }

    async delete(id: string): Promise<void> {
        this.rabbitMQService.send('rabbit-mq-producer', {
            message: 'ADD TASK, [DELETE], ' + id,
        });
        await this.repository.softDelete(id);
    }
}
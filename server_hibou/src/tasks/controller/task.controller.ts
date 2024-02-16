import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Task } from "./../entity/task.entity";
import { TaskService } from "./../service/task.service";

@Controller('task')
export class TaskController {

    constructor(private service: TaskService) {}

    @Get()
    async getAll() {
        return this.service.getAll();
    }

    @Post()
    async create(@Body() task: Task) {
        return this.service.create(task);
    }

    @Put()
    async update(@Body() task: Task) {
        return this.service.update(task);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.service.delete(id);
    }
}
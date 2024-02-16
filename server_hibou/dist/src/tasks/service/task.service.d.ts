import { Repository } from 'typeorm';
import { Task } from "../entity/task.entity";
export declare class TaskService {
    private repository;
    constructor(repository: Repository<Task>);
    getAll(): Promise<Task[]>;
    create(category: Task): Promise<Task>;
    update(category: Task): Promise<Task>;
    delete(id: string): Promise<void>;
}

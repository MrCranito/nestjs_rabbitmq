import { Task } from "../entity/task.entity";
import { TaskService } from "../service/task.service";
export declare class TaskController {
    private service;
    constructor(service: TaskService);
    getAll(): Promise<Task[]>;
    create(task: Task): Promise<Task>;
    update(task: Task): Promise<Task>;
    delete(id: string): Promise<void>;
}

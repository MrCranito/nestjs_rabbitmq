import { Task } from './../../tasks/entity/task.entity';
export declare class Category {
    id: string;
    name: string;
    created_at?: Date;
    updated_at?: Date;
    archived_at?: Date;
    tasks: Task[];
}

import { Category } from './../../categories/entity/category.entity';
export declare class Task {
    id: string;
    name: string;
    category_id: string;
    created_at?: Date;
    updated_at?: Date;
    archived_at?: Date;
    category: Category;
}

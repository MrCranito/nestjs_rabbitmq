import { Category } from "../entity/category.entity";
import { Repository } from 'typeorm';
export declare class CategoryService {
    private repository;
    constructor(repository: Repository<Category>);
    getAll(): Promise<Category[]>;
    create(category: Category): Promise<Category>;
    update(category: Category): Promise<Category>;
    delete(id: string): Promise<void>;
}

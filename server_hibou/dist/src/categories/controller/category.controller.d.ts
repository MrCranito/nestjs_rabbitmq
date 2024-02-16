import { CategoryService } from "../service/category.service";
import { Category } from "../entity/category.entity";
export declare class CategoryController {
    private categoryService;
    constructor(categoryService: CategoryService);
    getAll(): Promise<Category[]>;
    create(category: Category): Promise<Category>;
    update(category: Category): Promise<Category>;
    delete(id: string): Promise<void>;
}

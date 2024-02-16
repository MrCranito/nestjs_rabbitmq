import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CategoryService } from "./../service/category.service";
import { Category } from "./../entity/category.entity";

@Controller('category')
export class CategoryController {

    constructor(private categoryService: CategoryService) {}

    @Get()
    async getAll() {
        return this.categoryService.getAll();
    }

    @Post()
    async create(@Body() category: Category) {
        return this.categoryService.create(category);
    }

    @Put()
    async update(@Body() category: Category) {
        return this.categoryService.update(category);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.categoryService.delete(id);
    }
}
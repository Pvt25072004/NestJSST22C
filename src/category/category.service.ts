import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/category/category.entity';
import { Repository } from 'typeorm';
import { CategoryDTO } from './categoryDTO';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private categoryRepository: Repository<Category>, ){};

    getAll() {
        return this.categoryRepository.find({
            relations: {
            products: true,
            },
        });
        }
    getOneById(id: number){
        return this.categoryRepository.findOne({
            where: {id},
            relations: {
                products: true,
            }
        });
    }
    async createCategory(params: CategoryDTO) {
        const newCategory = new Category();
        newCategory.name = params.name;
        newCategory.description = params.description;
        return this.categoryRepository.save(newCategory);
    }
    
    deleteById(id: number){
        return this.categoryRepository.findOne({where:{id},
        relations:{
            products: false,
        }
        });
    }
    async updateCategory(id: number, params: CategoryDTO) {
        const category = await this.categoryRepository.findOne({ where: { id } });
        if (!category) {
            throw new Error('Category not found');
        }
        Object.assign(category, params);
        return this.categoryRepository.save(category);
    }
    
}

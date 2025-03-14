import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/category/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private categoryRepository: Repository<Category>, ){};
    getOneById(id: number){
        return this.categoryRepository.findOne({
            where: {id},
            relations: {
                products: true,
            }
        });
    }
    deleteById(id: number){
        return this.categoryRepository.findOne({where:{id},
        relations:{
            products: false,
        }
        });
    }
}

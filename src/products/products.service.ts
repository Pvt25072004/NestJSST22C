import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
// import { ProductParams } from './products.controller';
import { ProductDTO } from './productDTO';
import { CategoryService } from 'src/category/category.service';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>, private categoryService: CategoryService){};

    getAll(): Promise<Product[]> {
        return this.productRepository.find({
            relations: {
            category: true,
            },
        });
        }
    // getAll():Promise <Product[]>{
    //     return this.productRepository.find();
    // }
    getDetail(id: number){
        return this.productRepository.findOneBy({id});
    }
    async createProduct(params: ProductDTO){
        const category = await this.categoryService.getOneById(1)
        const productNew = new Product();
        productNew.name = params.name;
        productNew.description = params.description;
        productNew.quantity = params.quantity;
        productNew.price = params.price;
        productNew.category = category;
        return this.productRepository.save(productNew);
    }
    async updateProduct(id: number, params: ProductDTO) {
        const productUpdate = await this.productRepository.findOne({ where: { id } });
        if (!productUpdate) {
            throw new Error(`Not found`);
        }
        Object.assign(productUpdate, params);
        return this.productRepository.save(productUpdate);
    }

    deleteProduct(id: number){
        return this.productRepository.delete(id);
    }
}

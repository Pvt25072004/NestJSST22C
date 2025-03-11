import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { ProductParams } from './products.controller';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>, ){};

    getAll():Promise <Product[]>{
        return this.productRepository.find();
    }
    getDetail(id: number){
        return this.productRepository.findOneBy({id});
    }
    createProduct(params: ProductParams){
        const productNew = new Product();
        productNew.name = params.name;
        productNew.description = params.description;
        productNew.quantity = params.quantity;
        productNew.price = params.price;
        return this.productRepository.save(productNew);
    }
    async updateProduct(id: number, params: ProductParams) {
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

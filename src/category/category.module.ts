import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/products/product.entity';
import { CategoryController } from './category.controller';
import { Category } from './category.entity';
import { CategoryResolver } from './category.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([Category])],
    providers: [CategoryService, CategoryResolver],
    controllers: [CategoryController],
    exports: [CategoryService],
})
export class CategoryModule {

}

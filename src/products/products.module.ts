import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product } from './product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryService } from 'src/category/category.service';
import { CategoryModule } from 'src/category/category.module';
import { ProductsResolver } from './products.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([Product]), CategoryModule],
    providers: [ProductsService, ProductsResolver],
    controllers: [ProductsController],
    exports:[ProductsService]
})
export class ProductsModule {}

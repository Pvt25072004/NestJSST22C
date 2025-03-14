import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/product.entity';
import { ProductsModule } from './products/products.module';
import { Category } from './category/category.entity';
import { CategoryService } from './category/category.service';
import { CategoryModule } from './category/category.module';
// provide controllers in module
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Pvt@2507',
    database: 'test_db_nestjs',
    entities: [Product, Category],
    synchronize: true,
  }), ProductsModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

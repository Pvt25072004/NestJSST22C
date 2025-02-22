import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
// provide controllers in module
@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/demonestjs'), UsersModule],
  controllers: [AppController, ProductsController],
  providers: [AppService],
})
export class AppModule {}

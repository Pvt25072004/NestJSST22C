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
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AuthenController } from './authen/authen.controller';
import { AuthenService } from './authen/authen.service';
import { AuthenModule } from './authen/authen.module';
import { EmployeeController } from './employee/employee.controller';
import { EmployeeModule } from './employee/employee.module';
import { DepartmentController } from './department/department.controller';
import { DepartmentModule } from './department/department.module';
import { Employee } from './employee/employee.entity';
import { Department } from './department/department.entity';
import { MailerModule } from '@nestjs-modules/mailer';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
// provide controllers in module
@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'phamtienlq955@gmail.com',
          pass: 'seccdfumqzjqouuj',
        },
      },
      defaults: {
        from: '"Your App" <your-email@gmail.com>',
      },
      template: {
        dir: join(__dirname, 'templates'), // Thư mục chứa file .ejs
        adapter: new EjsAdapter(), // Adapter cho EJS
        options: {
          strict: false,
        },
      },
    }),
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Pvt@2507',
    database: 'test_db_nestjs',
    entities: [Product, Category, Employee, Department],
    synchronize: true,
  }),
  GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  }),
  ProductsModule, CategoryModule, AuthenModule, EmployeeModule, DepartmentModule],
  controllers: [AppController,],
  providers: [AppService, ],
})
export class AppModule {}

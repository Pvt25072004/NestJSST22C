import { CategoryService } from './../category/category.service';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Render } from '@nestjs/common';
import { ProductsService } from './products.service';

export interface ProductParams {
  name: string;
  description: string;
  price: number;
  quantity: string;
}
@Controller('products')
export class ProductsController {

  constructor(private productService: ProductsService, private categoryService: CategoryService){}
  @Get('')
  async index(){
    // const category = await this.categoryService.getOne;
    const products = await this.productService.getAll()
    return { message: 'Get success data!!!', data: products };
  }
  @Get('/:id')
  async detail(@Param("id") id: number){
    const product = await this.productService.getDetail(id)
    return { message: 'Get success data detail !!!', data: product };
  }
  @Post('/')
  async create(@Body() body: ProductParams){
      const product = await this.productService.createProduct(body)
      return { message: 'Create success data!!!', data:product}
  }
  @Put('/:id')
  async update(@Param("id") id: number, @Body() body: ProductParams){
    await this.productService.updateProduct(id, body)
    return { message: 'Update success data!!!' }
  }
  @Delete('/:id')
  async delete(@Param("id") id: number ){
    await this.productService.deleteProduct(id)
    return { message: 'Delete success data!!!' }
  }
}
    // // three way to get value from client(params, query, body)
    // // @Get("/product/:id")
    // @Get("/product")
    // @Render('index')
    // // root() {
    // //   return { message: 'Hello world!' };
    // // }
    // // body
    // // @Post("/product")
    // @Render('index')
    // // createProduct(@Req() req: Request)
    // // @Body() createProductDto
    // createProduct() {
    //   return { message: 'Product created!' };
    // }

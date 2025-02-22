import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class ProductsController {
    // three way to get value from client(params, query, body)
    // @Get("/product/:id")
    @Get("/product")
    @Render('index')
    root() {
      return { message: 'Hello world!' };
    }
    // body
    // @Post("/product")
    @Render('index')
    // createProduct(@Req() req: Request)
    // @Body() createProductDto
    createProduct() {
      return { message: 'Product created!' };
    }
}

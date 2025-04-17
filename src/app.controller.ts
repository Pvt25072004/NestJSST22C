import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductsService } from './products/products.service';
import { MailerService } from '@nestjs-modules/mailer';
import { name } from 'ejs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private productService: ProductsService,
    private mailService: MailerService,
  ) {}
// call or define
  @Get()
  @Render('index')
  async getHello() {
    // const product = await this.productService.getDetail(9);
    // this.mailService
    //   .sendMail({
    //     to: 'phamtienlq955@gmail.com', // list of receivers
    //     from: 'phamtienlq955@gmail.com', // sender address
    //     subject: 'Testing Nest MailerModule ✔', // Subject line
    //     template: '../../src/templates/mail',
    //     context: {
    //       code: 'cf1a3f828287',
    //       username: product?.name,
    //     },
    //   })
    //   .then((data) => {
    //     console.log('Gửi Mail thành công!!', data);
    //   })
    //   .catch((err) => {
    //     console.log('Gửi Mail Không thành công!!', err);
    //   });
    // return this.appService.getHello();
    return {name: "Hi"};
  }
  @Get("/about")
  getAboutPage(): string {
    return this.appService.getAboutPage();
  }
}

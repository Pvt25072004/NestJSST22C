import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
// call or define
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("/about")
  getAboutPage(): string {
    return this.appService.getAboutPage();
  }
}

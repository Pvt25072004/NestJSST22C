import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! I am Money!';
  }
  getAboutPage(): string {
    return 'Hello about page';
  }
  getUser(): string {
    return 'Hello user page';
  }
}

import { Controller, Post } from '@nestjs/common';
import { AuthenService } from './authen.service';

@Controller('authen')
export class AuthenController {
    constructor(private authenService: AuthenService){}
    @Post("/login")
    async login(){
        const token = await this.authenService.signIn()
        return { message: 'Login success!!!', token};
    }
}

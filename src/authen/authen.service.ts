import { SignOptions } from './../../node_modules/@types/jsonwebtoken/index.d';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './jwtConstants';

@Injectable()
export class AuthenService {
    constructor(private jwtService: JwtService){}
    // get data of users check with signin to return token
    // analysis 
    async signIn(){
        const payLoad = {
            email: "a@gmail.com",
            name: "PVT",
        }
        return await this.jwtService.signAsync(payLoad, jwtConstants)
        // return {
        // secret to setup logic in jwtConstants
        //     accessToken: await this.jwtService.signAsync(payLoad, {secret: "ABCAuthen", expiresIn:'60s'})
        // }
    }
}

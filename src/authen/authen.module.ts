import { Module } from '@nestjs/common';
import { AuthenController } from './authen.controller';
import { AuthenService } from './authen.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './jwtConstants';

@Module({
        imports:[JwtModule.register({
            global: true,
            // can create to save
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60s' },
          }),],
        //   need to delete default of JwtService
        providers: [AuthenService],
        controllers: [AuthenController],
})
export class AuthenModule {}

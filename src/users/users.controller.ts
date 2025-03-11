import { UserDTO } from './userDTO';
import { UsersService } from './users.service';
import { Controller, Get, Put } from '@nestjs/common';

@Controller('/users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get("")
    public async index() {
        const users = await this.usersService.getAll();
        return { message: 'Get success data!!!', users };
    }
    @Get("/newuser")
    public async createUser() {
      const userDTO = new UserDTO();
      userDTO.age = 22;
      userDTO.email = 'hg@gmail.com';
      userDTO.name = 'hg';
      userDTO.status = true;
      await this.usersService.create(userDTO);
      const displayUser = await this.usersService.getAll();
      return { message: 'Create new user success!!!' , displayUser};
    }
    
}

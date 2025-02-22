import { UserDTO } from './userDTO';
import { UsersService } from './users.service';
import { Controller, Get } from '@nestjs/common';

@Controller('/users')
export class UsersController {
    constructor(private usersService: UsersService) {}
    // const userDTO = new UserDTO();
    // userDTO.age = 12;
    // userDTO.email = 'abv';
    // userDTO.name = 'Abc';
    // userDTO.status = true;
    // await this.userService.create(userDTO);
    @Get("")
    public async index() {
        const users = await this.usersService.getAll();
        return { message: 'Get success data!!!', users };
      }
}

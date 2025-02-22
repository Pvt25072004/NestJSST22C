import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './users.schema';
import { UserDTO } from './userDTO';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    public async getAll() {
      return this.userModel.find({});
    }
  
    public async create(userDTO: UserDTO) {
      const user = new this.userModel(userDTO);
      return user.save();
    }
}

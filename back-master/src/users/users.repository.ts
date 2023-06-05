import { HttpException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { User } from './users.schema';
import { UserRequestDto } from './dto/users.request.dto';



@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>
  ) {}

  async findAll() {
    return await this.userModel.find();
  }

  async findUserByIdWithoutPassword(
    userId: string | Types.ObjectId
  ): Promise<UserRequestDto | null> {
    const user = await this.userModel.findById(userId).select('-password');
    return user;
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const user = await this.userModel.findOne({ email });
    return user;
  }

  async existsByEmail(email: string): Promise<boolean> {
    const result = await this.userModel.exists({ email });
    if (result?._id) return true;
    return false;
    // return result;
  }
  async create(user: UserRequestDto): Promise<User> {
    return await this.userModel.create(user);
  }
}

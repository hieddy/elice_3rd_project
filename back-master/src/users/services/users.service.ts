import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from '../users.schema';
import { UserRequestDto } from '../dto/users.request.dto';
import { UsersRepository } from '../users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getAllUser() {
    const allUser = await this.usersRepository.findAll();
    const readOnlyUsers = allUser.map((user) => user.readOnlyData);
    return readOnlyUsers;
  }

  async signUp(body: UserRequestDto) {
    const { email, nickname, password } = body;
    const isUserExist = await this.usersRepository.existsByEmail(email);
    if (isUserExist) {
      throw new UnauthorizedException('해당하는 email은 이미 존재합니다.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.usersRepository.create({
      email,
      nickname,
      password: hashedPassword,
    });

    return user.readOnlyData;
  }
}

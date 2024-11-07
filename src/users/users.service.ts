import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './model/user.model';  // Модель пользователя
import { RegisterDto } from '../auth/dto/register.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  remove(arg0: number) {
    throw new Error('Method not implemented.');
  }
  update(arg0: number, updateUserDto: UpdateUserDto) {
    throw new Error('Method not implemented.');
  }
  findOne(arg0: number) {
    throw new Error('Method not implemented.');
  }
  findAll() {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async findByEmail(email: string): Promise<User | undefined> {
    return this.userModel.findOne({ where: { email } });
  }

  async create(registerDto: RegisterDto): Promise<User> {
    return this.userModel.create(registerDto);
  }

  async findById(id: number): Promise<User> {
    return this.userModel.findOne({ where: { id } });
  }
}

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  // Метод для входа
  async login(loginDto: LoginDto) {
    const user = await this.usersService.findByEmail(loginDto.email);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(loginDto.password, user.password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }

    const payload: JwtPayload = { userId: user.id };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken };
  }

  // Метод для регистрации
  async register(registerDto: RegisterDto) {
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);
    const newUser = await this.usersService.create({
      ...registerDto,
      password: hashedPassword,
    });
    
    const payload: JwtPayload = { userId: newUser.id };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken };
  }
}

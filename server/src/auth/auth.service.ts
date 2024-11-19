import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ValidateUserDto } from 'src/users/dto/validate-user.dto';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(dto: ValidateUserDto) {
    const user = await this.validateUser(dto);
    return this.generateToken(user);
  }

  async register(dto: CreateUserDto) {
    const candidate = await this.userService.findOneByEmail(dto.email);
    if (candidate) {
      throw new HttpException(
        'The user with this email is already exists',
        HttpStatus.BAD_REQUEST,
      );
    }
    const encryptPassword = await bcrypt.hash(dto.password, 5);
    const user = await this.userService.create({
      ...dto,
      password: encryptPassword,
    });
    return this.generateToken(user);
  }

  private async generateToken(user: User) {
    const payload = { id: user.id, email: user.email };
    return { token: this.jwtService.sign(payload) };
  }

  private async validateUser(dto: ValidateUserDto) {
    const user = await this.userService.findOneByEmail(dto.email);
    const passwordIsEqual = await bcrypt.compare(
      dto.password,
      user.encryptedPassword,
    );
    if (user && passwordIsEqual) {
      return user;
    }
    throw new UnauthorizedException({ message: 'Invalid email or password' });
  }
}

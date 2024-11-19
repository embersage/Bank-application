import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { PassportsService } from 'src/passports/passports.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private passportsService: PassportsService,
  ) {}

  async create(dto: CreateUserDto) {
    const passport = await this.passportsService.findOne(dto.passportId);
    const user = await this.usersRepository.save({
      ...dto,
      encryptedPassword: dto.password,
      passport,
    });
    return user;
  }

  async findAll() {
    const users = await this.usersRepository.find({ relations: ['passport'] });
    return users;
  }

  async findOne(id: string) {
    const user = await this.usersRepository.findOneBy({ id });
    return user;
  }

  async findOneByEmail(email: string) {
    const user = await this.usersRepository.findOne({ where: { email } });
    return user;
  }

  async remove(id: string) {
    const user = await this.usersRepository.delete(id);
    return user;
  }
}

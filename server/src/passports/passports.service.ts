import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePassportDto } from './dto/create-passport.dto';
import { Passport } from './passport.entity';

@Injectable()
export class PassportsService {
  constructor(
    @InjectRepository(Passport)
    private passportRepository: Repository<Passport>,
  ) {}

  async create(dto: CreatePassportDto) {
    const passport = await this.passportRepository.save(dto);
    return passport;
  }

  async findAll() {
    const passports = await this.passportRepository.find();
    return passports;
  }

  async findOne(id: string) {
    const passport = this.passportRepository.findOneBy({ id });
    return passport;
  }

  async remove(id: string) {
    const passport = await this.passportRepository.delete(id);
    return passport;
  }
}

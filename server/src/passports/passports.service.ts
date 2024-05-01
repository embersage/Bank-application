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

  async create(createPassportDto: CreatePassportDto) {
    const passport = await this.passportRepository.create(createPassportDto);
    return passport;
  }

  async findAll() {
    const currencies = await this.passportRepository.find();
    return currencies;
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

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { Currency } from './currency.entity';

@Injectable()
export class CurrenciesService {
  constructor(
    @InjectRepository(Currency)
    private currenciesRepository: Repository<Currency>,
  ) {}

  async create(createCurrencyDto: CreateCurrencyDto) {
    const currency = await this.currenciesRepository.save(createCurrencyDto);
    return currency;
  }

  async findAll() {
    const currencies = await this.currenciesRepository.find();
    return currencies;
  }

  async findOne(id: string) {
    const currency = this.currenciesRepository.findOneBy({ id });
    return currency;
  }

  async remove(id: string) {
    const currency = await this.currenciesRepository.delete(id);
    return currency;
  }
}

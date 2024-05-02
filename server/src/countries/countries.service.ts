import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCountryDto } from './dto/create-country.dto';
import { Country } from './country.entity';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(Country)
    private countriesRepository: Repository<Country>,
  ) {}

  async create(createCountryDto: CreateCountryDto) {
    const country = await this.countriesRepository.create(createCountryDto);
    return country;
  }

  async findAll() {
    const countries = await this.countriesRepository.find();
    return countries;
  }

  async findOne(id: string) {
    const country = this.countriesRepository.findOneBy({ id });
    return country;
  }

  async remove(id: string) {
    const country = await this.countriesRepository.delete(id);
    return country;
  }
}

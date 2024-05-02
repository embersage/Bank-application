import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCityDto } from './dto/create-city.dto';
import { City } from './city.entity';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(City)
    private citiesRepository: Repository<City>,
  ) {}

  async create(createCityDto: CreateCityDto) {
    const city = await this.citiesRepository.save(createCityDto);
    return city;
  }

  async findAll() {
    const cities = await this.citiesRepository.find();
    return cities;
  }

  async findOne(id: string) {
    const city = this.citiesRepository.findOneBy({ id });
    return city;
  }

  async remove(id: string) {
    const city = await this.citiesRepository.delete(id);
    return city;
  }
}

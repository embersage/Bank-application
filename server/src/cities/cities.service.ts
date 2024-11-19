import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCityDto } from './dto/create-city.dto';
import { City } from './city.entity';
import { ProvincesService } from 'src/provinces/provinces.service';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(City)
    private citiesRepository: Repository<City>,
    private provincesService: ProvincesService,
  ) {}

  async create(dto: CreateCityDto) {
    const province = await this.provincesService.findOne(dto.provinceId);
    const city = await this.citiesRepository.save({ ...dto, province });
    return city;
  }

  async findAll() {
    const cities = await this.citiesRepository.find({
      relations: ['province'],
    });
    return cities;
  }

  async findOne(id: string) {
    const city = this.citiesRepository.findOne({
      where: { id },
      relations: ['province'],
    });
    return city;
  }

  async remove(id: string) {
    const city = await this.citiesRepository.delete(id);
    return city;
  }
}

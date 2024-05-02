import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStreetDto } from './dto/create-street.dto';
import { Street } from './street.entity';
import { CitiesService } from 'src/cities/cities.service';

@Injectable()
export class StreetsService {
  constructor(
    @InjectRepository(Street)
    private streetsRepository: Repository<Street>,
    private citiesService: CitiesService,
  ) {}

  async create(dto: CreateStreetDto) {
    const city = await this.citiesService.findOne(dto.cityId);
    const street = await this.streetsRepository.save({ ...dto, city });
    return street;
  }

  async findAll() {
    const streets = await this.streetsRepository.find({ relations: ['city'] });
    return streets;
  }

  async findOne(id: string) {
    const street = this.streetsRepository.findOne({
      where: { id },
      relations: ['city'],
    });
    return street;
  }

  async remove(id: string) {
    const street = await this.streetsRepository.delete(id);
    return street;
  }
}

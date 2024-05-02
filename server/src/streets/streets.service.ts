import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStreetDto } from './dto/create-street.dto';
import { Street } from './street.entity';

@Injectable()
export class StreetsService {
  constructor(
    @InjectRepository(Street)
    private streetsRepository: Repository<Street>,
  ) {}

  async create(createStreetDto: CreateStreetDto) {
    const street = await this.streetsRepository.save(createStreetDto);
    return street;
  }

  async findAll() {
    const streets = await this.streetsRepository.find();
    return streets;
  }

  async findOne(id: string) {
    const street = this.streetsRepository.findOneBy({ id });
    return street;
  }

  async remove(id: string) {
    const street = await this.streetsRepository.delete(id);
    return street;
  }
}

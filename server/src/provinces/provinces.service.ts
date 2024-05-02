import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProvinceDto } from './dto/create-province.dto';
import { Province } from './province.entity';

@Injectable()
export class ProvincesService {
  constructor(
    @InjectRepository(Province)
    private provincesRepository: Repository<Province>,
  ) {}

  async create(createProvinceDto: CreateProvinceDto) {
    const province = await this.provincesRepository.create(createProvinceDto);
    return province;
  }

  async findAll() {
    const provinces = await this.provincesRepository.find();
    return provinces;
  }

  async findOne(id: string) {
    const province = this.provincesRepository.findOneBy({ id });
    return province;
  }

  async remove(id: string) {
    const province = await this.provincesRepository.delete(id);
    return province;
  }
}

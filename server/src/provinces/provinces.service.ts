import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProvinceDto } from './dto/create-province.dto';
import { Province } from './province.entity';
import { CountriesService } from 'src/countries/countries.service';

@Injectable()
export class ProvincesService {
  constructor(
    @InjectRepository(Province)
    private provincesRepository: Repository<Province>,
    private countriesService: CountriesService,
  ) {}

  async create(dto: CreateProvinceDto) {
    const country = await this.countriesService.findOne(dto.countryId);
    const province = await this.provincesRepository.save({ ...dto, country });
    return province;
  }

  async findAll() {
    const provinces = await this.provincesRepository.find({
      relations: ['country'],
    });
    return provinces;
  }

  async findOne(id: string) {
    const province = this.provincesRepository.findOne({
      where: { id },
      relations: ['country'],
    });
    return province;
  }

  async remove(id: string) {
    const province = await this.provincesRepository.delete(id);
    return province;
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTypeDto } from './dto/create-type.dto';
import { Type } from './type.entity';

@Injectable()
export class TypesService {
  constructor(
    @InjectRepository(Type)
    private typesRepository: Repository<Type>,
  ) {}

  async create(createTypeDto: CreateTypeDto) {
    const type = await this.typesRepository.create(createTypeDto);
    return type;
  }

  async findAll() {
    const types = await this.typesRepository.find();
    return types;
  }

  async findOne(id: string) {
    const type = this.typesRepository.findOneBy({ id });
    return type;
  }

  async remove(id: string) {
    const type = await this.typesRepository.delete(id);
    return type;
  }
}

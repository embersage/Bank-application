import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOperationTypeDto } from './dto/create-operationType.dto';
import { OperationType } from './operationType.entity';

@Injectable()
export class OperationTypesService {
  constructor(
    @InjectRepository(OperationType)
    private typesRepository: Repository<OperationType>,
  ) {}

  async create(createTypeDto: CreateOperationTypeDto) {
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

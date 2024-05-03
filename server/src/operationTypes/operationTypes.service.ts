import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOperationTypeDto } from './dto/create-operationType.dto';
import { OperationType } from './operationType.entity';

@Injectable()
export class OperationTypesService {
  constructor(
    @InjectRepository(OperationType)
    private operationTypesRepository: Repository<OperationType>,
  ) {}

  async create(dto: CreateOperationTypeDto) {
    const operationType = await this.operationTypesRepository.save(dto);
    return operationType;
  }

  async findAll() {
    const operationTypes = await this.operationTypesRepository.find();
    return operationTypes;
  }

  async findOne(id: string) {
    const operationType = await this.operationTypesRepository.findOneBy({ id });
    return operationType;
  }

  async remove(id: string) {
    const operationType = await this.operationTypesRepository.delete(id);
    return operationType;
  }
}

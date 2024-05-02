import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOperationDto } from './dto/create-operation.dto';
import { Operation } from './operation.entity';

@Injectable()
export class OperationsService {
  constructor(
    @InjectRepository(Operation)
    private operationsRepository: Repository<Operation>,
  ) {}

  async create(createOperationDto: CreateOperationDto) {
    const operation =
      await this.operationsRepository.create(createOperationDto);
    return operation;
  }

  async findAll() {
    const operations = await this.operationsRepository.find();
    return operations;
  }

  async findOne(id: string) {
    const operation = this.operationsRepository.findOneBy({ id });
    return operation;
  }

  async remove(id: string) {
    const operation = await this.operationsRepository.delete(id);
    return operation;
  }
}

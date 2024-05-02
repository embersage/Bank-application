import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOperationDto } from './dto/create-operation.dto';
import { Operation } from './operation.entity';
import { AccountsService } from 'src/accounts/accounts.service';
import { OperationTypesService } from 'src/operationTypes/operationTypes.service';

@Injectable()
export class OperationsService {
  constructor(
    @InjectRepository(Operation)
    private operationsRepository: Repository<Operation>,
    private accountsService: AccountsService,
    private operationTypesService: OperationTypesService,
  ) {}

  async create(dto: CreateOperationDto) {
    const account = await this.accountsService.findOne(dto.accountId);
    const operationType = await this.operationTypesService.findOne(
      dto.operationTypeId,
    );
    const operation = await this.operationsRepository.save({
      ...dto,
      account,
      operationType,
    });
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

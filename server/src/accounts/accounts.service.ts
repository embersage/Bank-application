import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountDto } from './dto/create-account.dto';
import { Account } from './account.entity';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private accountsRepository: Repository<Account>,
  ) {}

  async create(createAccountDto: CreateAccountDto) {
    const account = await this.accountsRepository.save(createAccountDto);
    return account;
  }

  async findAll() {
    const accounts = await this.accountsRepository.find();
    return accounts;
  }

  async findOne(id: string) {
    const account = this.accountsRepository.findOneBy({ id });
    return account;
  }

  async remove(id: string) {
    const account = await this.accountsRepository.delete(id);
    return account;
  }
}

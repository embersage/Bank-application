import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountDto } from './dto/create-account.dto';
import { Account } from './account.entity';
import { UsersService } from 'src/users/users.service';
import { CurrenciesService } from 'src/currencies/currencies.service';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private accountsRepository: Repository<Account>,
    private usersService: UsersService,
    private currenciesService: CurrenciesService,
  ) {}

  async create(dto: CreateAccountDto) {
    const user = await this.usersService.findOne(dto.userId);
    const currency = await this.currenciesService.findOne(dto.currencyId);
    const account = await this.accountsRepository.save({
      ...dto,
      user,
      currency,
    });
    return account;
  }

  async findAll() {
    const accounts = await this.accountsRepository.find({
      relations: ['user', 'currency'],
    });
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

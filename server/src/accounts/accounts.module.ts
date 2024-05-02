import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './account.entity';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { User } from 'src/users/user.entity';
import { Currency } from 'src/currencies/currency.entity';
import { UsersModule } from 'src/users/users.module';
import { CurrenciesModule } from 'src/currencies/currencies.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Account, User, Currency]),
    UsersModule,
    CurrenciesModule,
  ],
  providers: [AccountsService],
  controllers: [AccountsController],
  exports: [AccountsService],
})
export class AccountsModule {}

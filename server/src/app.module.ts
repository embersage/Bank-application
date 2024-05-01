import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Account } from './accounts/account.entity';
import { AccountsModule } from './accounts/accounts.module';
import { AccountsController } from './accounts/accounts.controller';
import { AccountsService } from './accounts/accounts.service';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { Card } from './cards/card.entity';
import { CardsModule } from './cards/cards.module';
import { CardsController } from './cards/cards.controller';
import { CardsService } from './cards/cards.service';
import { Currency } from './currencies/currency.entity';
import { CurrenciesModule } from './currencies/currencies.module';
import { CurrenciesController } from './currencies/currencies.controller';
import { CurrenciesService } from './currencies/currencies.service';
import { Passport } from './passports/passport.entity';
import { PassportsModule } from './passports/passports.module';
import { PassportsController } from './passports/passports.controller';
import { PassportsService } from './passports/passports.service';
import { Type } from './types/type.entity';
import { TypesModule } from './types/types.module';
import { TypesController } from './types/types.controller';
import { TypesService } from './types/types.service';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.${process.env.NODE_ENV}.env` }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB,
      entities: [User, Account, Currency, Type, Card, Passport],
      synchronize: true,
    }),
    UsersModule,
    AccountsModule,
    CurrenciesModule,
    TypesModule,
    CardsModule,
    PassportsModule,
  ],
  controllers: [
    UsersController,
    AccountsController,
    CurrenciesController,
    TypesController,
    CardsController,
    PassportsController,
  ],
  providers: [
    UsersService,
    AccountsService,
    CurrenciesService,
    TypesService,
    CardsService,
    PassportsService,
  ],
})
export class AppModule {}

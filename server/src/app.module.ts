import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Account } from './accounts/account.entity';
import { AccountsModule } from './accounts/accounts.module';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { Card } from './cards/card.entity';
import { CardsModule } from './cards/cards.module';
import { Currency } from './currencies/currency.entity';
import { CurrenciesModule } from './currencies/currencies.module';
import { Passport } from './passports/passport.entity';
import { PassportsModule } from './passports/passports.module';
import { CardType } from './cardTypes/cardType.entity';
import { CardTypesModule } from './cardTypes/cardTypes.module';
import { OperationType } from './operationTypes/operationType.entity';
import { OperationTypesModule } from './operationTypes/operationTypes.module';
import { Operation } from './operations/operation.entity';
import { OperationsModule } from './operations/operations.module';
import { Country } from './countries/country.entity';
import { CountriesModule } from './countries/countries.module';
import { Province } from './provinces/province.entity';
import { ProvincesModule } from './provinces/provinces.module';
import { City } from './cities/city.entity';
import { CitiesModule } from './cities/cities.module';
import { Street } from './streets/street.entity';
import { StreetsModule } from './streets/streets.module';

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
      entities: [
        User,
        Account,
        Currency,
        CardType,
        Card,
        Passport,
        OperationType,
        Operation,
        Country,
        Province,
        City,
        Street,
      ],
      synchronize: true,
    }),
    UsersModule,
    AccountsModule,
    CurrenciesModule,
    CardTypesModule,
    CardsModule,
    PassportsModule,
    OperationTypesModule,
    OperationsModule,
    CountriesModule,
    ProvincesModule,
    CitiesModule,
    StreetsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

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
import { CardType } from './cardTypes/cardType.entity';
import { CardTypesModule } from './cardTypes/cardTypes.module';
import { CardTypesController } from './cardTypes/cardTypes.controller';
import { CardTypesService } from './cardTypes/cardTypes.service';
import { OperationType } from './operationTypes/operationType.entity';
import { OperationTypesModule } from './operationTypes/operationTypes.module';
import { OperationTypesController } from './operationTypes/operationTypes.controller';
import { OperationTypesService } from './operationTypes/operationTypes.service';
import { Operation } from './operations/operation.entity';
import { OperationsModule } from './operations/operations.module';
import { OperationsController } from './operations/operations.controller';
import { OperationsService } from './operations/operations.service';
import { Address } from './addresses/address.entity';
import { AddressesModule } from './addresses/addresses.module';
import { AddressesController } from './addresses/addresses.controller';
import { AddressesService } from './addresses/addresses.service';
import { Country } from './countries/country.entity';
import { CountriesModule } from './countries/countries.module';
import { CountriesController } from './countries/countries.controller';
import { CountriesService } from './countries/countries.service';
import { Province } from './provinces/province.entity';
import { ProvincesModule } from './provinces/provinces.module';
import { ProvincesController } from './provinces/provinces.controller';
import { ProvincesService } from './provinces/provinces.service';
import { City } from './cities/city.entity';
import { CitiesModule } from './cities/cities.module';
import { CitiesController } from './cities/cities.controller';
import { CitiesService } from './cities/cities.service';
import { Street } from './streets/street.entity';
import { StreetsModule } from './streets/streets.module';
import { StreetsController } from './streets/streets.controller';
import { StreetsService } from './streets/streets.service';

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
        Address,
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
    AddressesModule,
    CountriesModule,
    ProvincesModule,
    CitiesModule,
    StreetsModule,
  ],
  controllers: [
    UsersController,
    AccountsController,
    CurrenciesController,
    CardTypesController,
    CardsController,
    PassportsController,
    OperationTypesController,
    OperationsController,
    AddressesController,
    CountriesController,
    ProvincesController,
    CitiesController,
    StreetsController,
  ],
  providers: [
    UsersService,
    AccountsService,
    CurrenciesService,
    CardTypesService,
    CardsService,
    PassportsService,
    OperationTypesService,
    OperationsService,
    AddressesService,
    CountriesService,
    ProvincesService,
    CitiesService,
    StreetsService,
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './card.entity';
import { CardsService } from './cards.service';
import { CardsController } from './cards.controller';
import { Account } from 'src/accounts/account.entity';
import { AccountsModule } from 'src/accounts/accounts.module';
import { CardType } from 'src/cardTypes/cardType.entity';
import { CardTypesModule } from 'src/cardTypes/cardTypes.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Card, Account, CardType]),
    AccountsModule,
    CardTypesModule,
  ],
  providers: [CardsService],
  controllers: [CardsController],
  exports: [CardsService],
})
export class CardsModule {}

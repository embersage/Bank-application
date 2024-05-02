import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardType } from './cardType.entity';
import { CardTypesService } from './cardTypes.service';
import { CardTypesController } from './cardTypes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CardType])],
  providers: [CardTypesService],
  controllers: [CardTypesController],
})
export class CardTypesModule {}

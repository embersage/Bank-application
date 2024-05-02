import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardType } from './cardType.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CardType])],
  exports: [TypeOrmModule],
})
export class CardTypesModule {}

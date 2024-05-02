import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Street } from './street.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Street])],
  exports: [TypeOrmModule],
})
export class StreetsModule {}

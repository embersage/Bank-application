import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OperationType } from './operationType.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OperationType])],
  exports: [TypeOrmModule],
})
export class OperationTypesModule {}

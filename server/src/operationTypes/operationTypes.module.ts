import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OperationType } from './operationType.entity';
import { OperationTypesService } from './operationTypes.service';
import { OperationTypesController } from './operationTypes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OperationType])],
  providers: [OperationTypesService],
  controllers: [OperationTypesController],
  exports: [OperationTypesService],
})
export class OperationTypesModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Operation } from './operation.entity';
import { OperationsService } from './operations.service';
import { OperationsController } from './operations.controller';
import { Account } from 'src/accounts/account.entity';
import { OperationType } from 'src/operationTypes/operationType.entity';
import { AccountsModule } from 'src/accounts/accounts.module';
import { OperationTypesModule } from 'src/operationTypes/operationTypes.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Operation, Account, OperationType]),
    AccountsModule,
    OperationTypesModule,
  ],
  providers: [OperationsService],
  controllers: [OperationsController],
  exports: [OperationsService],
})
export class OperationsModule {}

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  Relation,
} from 'typeorm';
import { Account } from 'src/accounts/account.entity';
import { OperationType } from 'src/operationTypes/operationType.entity';

@Entity({ name: 'operations' })
export class Operation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'int', nullable: false })
  amount: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Account, (account) => account.operations, {
    onDelete: 'CASCADE',
  })
  account!: Relation<Account>;

  @ManyToOne(() => OperationType, (operationType) => operationType.operations, {
    onDelete: 'CASCADE',
  })
  operationType!: Relation<OperationType>;
}

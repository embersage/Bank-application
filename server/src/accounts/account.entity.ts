import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  Relation,
} from 'typeorm';
import { User } from 'src/users/user.entity';
import { Currency } from 'src/currencies/currency.entity';

@Entity({ name: 'accounts' })
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'int', nullable: false, default: 0 })
  amount: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Account, (account) => account.cards)
  cards!: Relation<Account>[];

  @OneToMany(() => Account, (account) => account.operations)
  operations!: Relation<Account>[];

  @ManyToOne(() => User, (user) => user.accounts, { onDelete: 'CASCADE' })
  user!: Relation<User>;

  @ManyToOne(() => Currency, (currency) => currency.accounts, {
    onDelete: 'CASCADE',
  })
  currency!: Relation<Currency>;
}

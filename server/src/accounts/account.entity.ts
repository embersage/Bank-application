import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  Relation,
} from 'typeorm';
import { User } from 'src/users/user.entity';
import { Currency } from 'src/currencies/currency.entity';

@Entity()
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'int', nullable: false })
  amount: number;

  @OneToMany(() => Account, (account) => account.cards)
  cards!: Relation<Account>[];

  @ManyToOne(() => User, (user) => user.accounts)
  user!: Relation<User>;

  @ManyToOne(() => Currency, (currency) => currency.accounts)
  currency!: Relation<Currency>;
}

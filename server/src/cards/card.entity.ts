import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  Relation,
} from 'typeorm';
import { Account } from 'src/accounts/account.entity';
import { Type } from 'src/types/type.entity';

@Entity()
export class Card {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  encryptedNumber: string;

  @Column({ type: 'varchar', nullable: false })
  encryptedExpiryMonth: string;

  @Column({ type: 'varchar', nullable: false })
  encryptedExpiryYear: string;

  @Column({ type: 'varchar', nullable: false })
  encryptedSecurityCode: string;

  @ManyToOne(() => Account, (account) => account.cards)
  account!: Relation<Account>;

  @ManyToOne(() => Type, (type) => type.cards)
  type!: Relation<Type>;
}

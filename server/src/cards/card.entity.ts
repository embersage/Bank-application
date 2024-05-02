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
import { CardType } from 'src/cardTypes/cardType.entity';

@Entity({ name: 'cards' })
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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Account, (account) => account.cards, { onDelete: 'CASCADE' })
  account!: Relation<Account>;

  @ManyToOne(() => CardType, (cardType) => cardType.cards, {
    onDelete: 'CASCADE',
  })
  cardType!: Relation<CardType>;
}

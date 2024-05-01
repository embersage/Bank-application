import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  Relation,
} from 'typeorm';
import { Card } from 'src/cards/card.entity';

@Entity()
export class Type {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @OneToMany(() => Card, (card) => card.type)
  cards!: Relation<Card>[];
}

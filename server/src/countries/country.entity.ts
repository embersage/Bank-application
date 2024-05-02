import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Relation,
} from 'typeorm';

@Entity({ name: 'countries' })
export class Country {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Country, (country) => country.addresses)
  addresses!: Relation<Country>[];

  @OneToMany(() => Country, (country) => country.provinces)
  provinces!: Relation<Country>[];
}

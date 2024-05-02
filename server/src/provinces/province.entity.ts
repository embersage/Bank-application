import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Relation,
  ManyToOne,
} from 'typeorm';
import { Country } from 'src/countries/country.entity';

@Entity({ name: 'provinces' })
export class Province {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Province, (province) => province.addresses)
  addresses!: Relation<Province>[];

  @OneToMany(() => Province, (province) => province.cities)
  cities!: Relation<Province>[];

  @ManyToOne(() => Country, (country) => country.provinces)
  country!: Relation<Country>;
}

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
import { Province } from 'src/provinces/province.entity';

@Entity({ name: 'cities' })
export class City {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => City, (city) => city.addresses)
  addresses!: Relation<City>[];

  @OneToMany(() => City, (city) => city.streets)
  streets!: Relation<City>[];

  @ManyToOne(() => Province, (province) => province.cities)
  country!: Relation<Province>;
}

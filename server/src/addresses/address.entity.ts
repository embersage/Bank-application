import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  Relation,
} from 'typeorm';
import { Country } from 'src/countries/country.entity';
import { Province } from 'src/provinces/province.entity';
import { City } from 'src/cities/city.entity';
import { Street } from 'src/streets/street.entity';

@Entity({ name: 'addresses' })
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'int', nullable: false })
  house: number;

  @Column({ type: 'int', nullable: false })
  flat: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Country, (country) => country.addresses)
  country!: Relation<Country>;

  @ManyToOne(() => Province, (province) => province.addresses)
  province!: Relation<Province>;

  @ManyToOne(() => City, (city) => city.addresses)
  city!: Relation<City>;

  @ManyToOne(() => Street, (street) => street.addresses)
  street!: Relation<Street>;
}

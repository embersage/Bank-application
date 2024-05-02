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
import { City } from 'src/cities/city.entity';

@Entity({ name: 'streets' })
export class Street {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Street, (street) => street.addresses)
  addresses!: Relation<Street>[];

  @ManyToOne(() => City, (city) => city.streets)
  city!: Relation<City>;
}

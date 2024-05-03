import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
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

  @ManyToOne(() => City, (city) => city.streets, { onDelete: 'CASCADE' })
  city!: Relation<City>;
}

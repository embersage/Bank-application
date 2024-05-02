import { Address } from 'src/addresses/address.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'passports' })
export class Passport {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'int', nullable: false })
  series: number;

  @Column({ type: 'int', nullable: false })
  number: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;
}

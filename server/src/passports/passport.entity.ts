import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from 'src/users/user.entity';

@Entity()
export class Passport {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'int', nullable: false })
  series: number;

  @Column({ type: 'int', nullable: false })
  number: number;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class FinancialRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  transactionDate: Date;

  @Column('decimal')
  amount: number;

  @Column()
  description: string;

  @ManyToOne(() => User, user => user.financialHistory)
  user: User;
}

import { User } from "src/users/entities/user.entity";
import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class Microcredit {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    amount: number;

    @Column()
    interestRate: number;

    @Column()
    status: string;

    @ManyToOne(() => User, user => user.microcredits)
    user: User;
}

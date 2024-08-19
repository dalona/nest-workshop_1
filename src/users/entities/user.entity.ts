import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import {FinancialRecord} from '../../financial-record/entities/financial-record.entity'
import { Microcredit } from "src/microcredit/entities/microcredit.entity";

export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column('int')
    creditScore: number;

    @OneToMany(() => FinancialRecord, financialRecord => financialRecord.user)
    financialHistory: FinancialRecord[];

    @OneToMany(() => Microcredit, microcredit => microcredit.user)
    microcredits: Microcredit[];
}

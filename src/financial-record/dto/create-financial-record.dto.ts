import { IsDate, IsDecimal, IsInt, IsString } from "class-validator";

export class CreateFinancialRecordDto {
    @IsDate()
    transactionDate: Date;

    @IsDecimal()
    amount: number;

    @IsString()
    description: string;

    @IsInt()
    userId: number;
}

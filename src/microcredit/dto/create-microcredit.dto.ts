import { IsDecimal, IsInt, IsString } from "class-validator";

export class CreateMicrocreditDto {
    @IsDecimal()
    amount: number;
  
    @IsDecimal()
    interestRate: number;
  
    @IsString()
    status: string;
  
    @IsInt()
    userId: number;
}

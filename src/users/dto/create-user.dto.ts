import { IsNumber, IsString } from 'class-validator';
export class CreateUserDto {
    @IsString()
    public name: string;

    @IsNumber()
    public creditScore: number;
}

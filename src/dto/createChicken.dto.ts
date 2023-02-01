import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateChickenDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  weight: number;
}

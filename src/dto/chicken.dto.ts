import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class UserDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  weight: number;
}

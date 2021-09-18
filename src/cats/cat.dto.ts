import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateCatDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  age: number;

  @IsString()
  breed: string;
}

export class UpdateCatDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  age: number;

  @IsOptional()
  @IsString()
  breed: string;
}

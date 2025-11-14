import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreatePokemonDto {
  // Entero, Positivo y min 1
  @IsInt()
  @IsPositive()
  @Min(1)
  no: number;

  // String, minLenght 1
  @IsString()
  @MinLength(1)
  name: string;
}

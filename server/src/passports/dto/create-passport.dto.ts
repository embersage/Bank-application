import { IsInt, IsString } from 'class-validator';

export class CreatePassportDto {
  @IsInt({ message: 'Must be an integer.' })
  series: number;
  @IsInt({ message: 'Must be an integer.' })
  number: number;
  @IsString({ message: 'Must be a string.' })
  country: string;
  @IsString({ message: 'Must be a string.' })
  province: string;
  @IsString({ message: 'Must be a string.' })
  city: string;
  @IsString({ message: 'Must be a string.' })
  street: string;
  @IsInt({ message: 'Must be an integer.' })
  house: number;
  @IsInt({ message: 'Must be an integer.' })
  flat: number;
}

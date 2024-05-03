import { IsString } from 'class-validator';

export class CreateStreetDto {
  @IsString({ message: 'Must be a string.' })
  readonly name: string;
  @IsString({ message: 'Must be a string.' })
  readonly cityId: string;
}

import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Must be a string.' })
  readonly surname: string;
  @IsString({ message: 'Must be a string.' })
  readonly name: string;
  @IsString({ message: 'Must be a string.' })
  readonly patronymic: string;
  @IsString({ message: 'Must be a string.' })
  @IsEmail({}, { message: 'Invalid email' })
  readonly email: string;
  @IsString({ message: 'Must be a string.' })
  readonly phoneNumber: string;
  @IsString({ message: 'Must be a string.' })
  @Length(8, 16, {
    message: `A password's length must be between 8 and 16 characters.`,
  })
  readonly password: string;
  @IsString({ message: 'Must be a string.' })
  readonly passportId: string;
}

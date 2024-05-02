export class CreateUserDto {
  surname: string;
  name: string;
  patronymic: string;
  email: string;
  phoneNumber: string;
  encryptedPassword: string;
  passportId: string;
}

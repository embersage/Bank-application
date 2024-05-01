export class CreateCardDto {
  encryptedNumber: string;
  encryptedExpiryMonth: string;
  encryptedExpiryYear: string;
  encryptedSecurityCode: string;
  accountId: string;
  typeId: string;
}

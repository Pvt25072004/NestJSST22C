// to validate data
import { IsEmail } from 'class-validator';

export class UserDTO {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsEmail()
  name: string;

  email: string;
  age: number;
  status: boolean;
}
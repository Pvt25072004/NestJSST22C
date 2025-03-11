// to validate data
import { IsEmail } from 'class-validator';

export class UserDTO {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call

  name: string;
  // @IsEmail()
  email: string;
  age: number;
  status: boolean;
}
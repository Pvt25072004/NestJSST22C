import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  email: number;

  @Prop()
  age: number;

  @Prop()
  status: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);

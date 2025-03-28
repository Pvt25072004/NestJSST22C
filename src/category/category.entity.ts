import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Product } from '../products/product.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';
@ObjectType()
@Entity()
export class Category{
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  description: string;

  @Field(() => [Product])
  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
  // @OneToMany(() => Product, (product) => product.category)
  // products: Product[];
}


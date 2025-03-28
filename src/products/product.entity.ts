import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Category } from '../category/category.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';
@ObjectType()
@Entity()
export class Product{
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column({ default: true })
  price: number;
  
  @Field()
  @Column({ default: true })
  quantity: string;

  @Field(() => Category)
  @ManyToOne(() => Category, (category) => category.products)
  category?: Category | null;
  // @ManyToOne(() => Category, (category) => category.products)
  // category: Category
}


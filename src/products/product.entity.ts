import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Category } from '../category/category.entity';
@Entity()
export class Product{
    @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ default: true })
  price: number;
  
  @Column({ default: true })
  quantity: string;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category
}


import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
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
}


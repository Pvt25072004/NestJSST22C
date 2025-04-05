import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Department } from 'src/department/department.entity';
@ObjectType()
@Entity()
export class Employee{
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column({ default: true })
  salary: number;
  
  @Field()
  @Column({ default: true })
  position: string;

  @Field(() => Department)
  @ManyToOne(() => Department, (department) => department.employees)
  department?: Department | null;
}


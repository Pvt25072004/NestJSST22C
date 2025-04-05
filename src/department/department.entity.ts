import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Category } from '../category/category.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Employee } from 'src/employee/employee.entity';
@ObjectType()
@Entity()
export class Department{
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  location: string;

  @Field(() => [Employee])
  @OneToMany(() => Employee, (employee) => employee.department)
  employees: Employee[];
}


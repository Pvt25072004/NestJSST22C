import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.entity';
import { DepartmentModule } from 'src/department/department.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeController } from './employee.controller';
import { EmployeeResolver } from './employee.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Employee]), DepartmentModule],
  providers: [EmployeeService, EmployeeResolver],
  controllers: [EmployeeController]
})
export class EmployeeModule {}

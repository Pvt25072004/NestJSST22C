import { Injectable } from '@nestjs/common';
import { Employee } from './employee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DepartmentService } from 'src/department/department.service';
import { EmployeeDTO } from './employeeDTO';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(Employee)
        private employeeRepository: Repository<Employee>, private departmentService: DepartmentService){};

    getAll(): Promise<Employee[]> {
        return this.employeeRepository.find({
            relations: {
            department: true,
            },
        });
    }
    getDetail(id: number){
        return this.employeeRepository.findOneBy({id});
    }
    async createEmployee(params: EmployeeDTO){
        const department = await this.departmentService.getOneById(1)
        const employeeNew = new Employee();
        employeeNew.name = params.name;
        employeeNew.email = params.email;
        employeeNew.salary = params.salary;
        employeeNew.position = params.position;
        employeeNew.department = department;
        return this.employeeRepository.save(employeeNew);
    }
    async updateEmployee(id: number, params: EmployeeDTO) {
        const employeeUpdate = await this.employeeRepository.findOne({ where: { id } });
        if (!employeeUpdate) {
            throw new Error(`Not found`);
        }
        Object.assign(employeeUpdate, params);
        return this.employeeRepository.save(employeeUpdate);
    }

    deleteEmployee(id: number){
        return this.employeeRepository.delete(id);
    }
}

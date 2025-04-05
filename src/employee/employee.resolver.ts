import { Employee } from './employee.entity';
import { EmployeeService } from './employee.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EmployeeDTO } from './employeeDTO';

@Resolver()
export class EmployeeResolver {
    constructor(private employeeService: EmployeeService) {}
    @Query(() => [Employee])
    async getAllEmployees() {
        return this.employeeService.getAll();
    }
    @Mutation(()=> Employee)
    async createEmployee(@Args("name")  name: string,@Args("email")  email: string, @Args("salary") salary: number, @Args("position")  position: string){
        const employee: EmployeeDTO = {
            name,
            email,
            salary,
            position,
        }
        return this.employeeService.createEmployee(employee)
    }
    @Mutation(()=> Employee)
    async updateEmployee(@Args("id")  id: number,@Args("name")  name: string,@Args("email")  email: string, @Args("salary") salary: number, @Args("position")  position: string){
        const employee: EmployeeDTO = {
            name,
            email,
            salary,
            position,
        }
        return this.employeeService.updateEmployee(id, employee)
    }
}

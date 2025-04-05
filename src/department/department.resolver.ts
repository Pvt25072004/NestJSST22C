import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DepartmentService } from './department.service';
import { Department } from './department.entity';
import { Employee } from 'src/employee/employee.entity';
import { EmployeeDTO } from 'src/employee/employeeDTO';
import { DepartmentDTO } from './departmentDTO';

@Resolver()
export class DepartmentResolver {
    constructor(private departmentService: DepartmentService) {}

    @Query(() => [Department])
        async getAllDepartment() {
        return this.departmentService.getAll();
    }
    @Mutation(()=> Department)
        async createDepartment(@Args("name")  name: string,@Args("location")  location: string){
            const department: DepartmentDTO = {
                name,
                location,
            }
            return this.departmentService.createDepartment(department)
        }
    @Mutation(()=>Department)
    async updateDepartment(@Args('id') id:number, @Args('name') name: string, @Args('location') location: string ){
    const department: DepartmentDTO = {
        name,
        location,
    }
    return this.departmentService.updateDepartment(id, department)
    }
}

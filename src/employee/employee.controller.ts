import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { DepartmentService } from 'src/department/department.service';
import { EmployeeDTO } from './employeeDTO';
import { AuthGuard } from 'src/authen/authen.guard';

@Controller('employee')
export class EmployeeController {
    constructor(private employeeService: EmployeeService, private departmentService: DepartmentService){}
    @UseGuards(AuthGuard)
    @Get('')
    async index(@Req() req:Request){
        console.log(req)
        // const category = await this.categoryService.getOne;
        const employees = await this.employeeService.getAll()
        return { message: 'Get success data!!!', data: employees };
    }
    @Get('/:id')
    async detail(@Param("id") id: number){
        const employee = await this.employeeService.getDetail(id)
        return { message: 'Get success data detail !!!', data: employee };
    }
    @UseGuards(AuthGuard)
    @Post('/')
    async create(@Body() body: EmployeeDTO){
        const employee = await this.employeeService.createEmployee(body)
        return { message: 'Create success data!!!', data:employee}
    }
    @UseGuards(AuthGuard)
    @Put('/:id')
    async update(@Param("id") id: number, @Body() body: EmployeeDTO){
        await this.employeeService.updateEmployee(id, body)
        return { message: 'Update success data!!!' }
    }
    @Delete('/:id')
    async delete(@Param("id") id: number ){
    await this.employeeService.deleteEmployee(id)
    return { message: 'Delete success data!!!' }
    }
}

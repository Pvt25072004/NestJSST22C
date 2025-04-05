import { Controller, Delete, Get, Param, Req, UseGuards } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { AuthGuard } from 'src/authen/authen.guard';

@Controller('department')
export class DepartmentController {
    constructor(private departmentService: DepartmentService){}
    @UseGuards(AuthGuard)
    @Get('')
    async index(@Req() req:Request) {
        const departments = await this.departmentService.getAll();
        // const employees = department?.employees;
        return { message: 'Get department data!!!' , data: departments};
    }
    @Get('/:id')
    async detail(@Param('id') id: number) {
        const department = await this.departmentService.getOneById(id);
        const employees = department?.employees;
        return { message: 'Get department data!!!' , data: employees};
    }
    @Delete('/:id')
    async deleteById(@Param('id') id: number) {
        await this.departmentService.deleteById(id);
        return { message: 'Delete department success!!!' };
    }
}

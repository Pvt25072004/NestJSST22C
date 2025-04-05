import { Injectable } from '@nestjs/common';
import { Department } from './department.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DepartmentDTO } from './departmentDTO';

@Injectable()
export class DepartmentService {
    constructor(
            @InjectRepository(Department)
            private departmentRepository: Repository<Department>, ){};
    
        getAll() {
            return this.departmentRepository.find({
                relations: {
                employees: true,
                },
            });
            }
        getOneById(id: number){
            return this.departmentRepository.findOne({
                where: {id},
                relations: {
                    employees: true,
                }
            });
        }
        async createDepartment(params: DepartmentDTO) {
            const newDepartment = new Department();
            newDepartment.name = params.name;
            newDepartment.location = params.location;
            return this.departmentRepository.save(newDepartment);
        }
        
        deleteById(id: number){
            return this.departmentRepository.findOne({where:{id},
            relations:{
                employees: false,
            }
            });
        }
        async updateDepartment(id: number, params: DepartmentDTO) {
            const department = await this.departmentRepository.findOne({ where: { id } });
            if (!department) {
                throw new Error('Department not found');
            }
            Object.assign(department, params);
            return this.departmentRepository.save(department);
        }
}

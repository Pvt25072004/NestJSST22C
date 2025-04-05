import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { Department } from './department.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentController } from './department.controller';
import { DepartmentResolver } from './department.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Department])],
  providers: [DepartmentService, DepartmentResolver],
  controllers: [DepartmentController],
  exports: [DepartmentService],
})
export class DepartmentModule {}

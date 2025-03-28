import { Query, Resolver } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category } from './category.entity';

@Resolver()
export class CategoryResolver {
    constructor(private categoryService: CategoryService) {}

    @Query(() => [Category])
    async getAllCategory() {
      return this.categoryService.getAll();
    }
}

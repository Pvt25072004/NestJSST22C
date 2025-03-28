import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category } from './category.entity';
import { CategoryDTO } from './categoryDTO';

@Resolver()
export class CategoryResolver {
  constructor(private categoryService: CategoryService) {}

  @Query(() => [Category])
  async getAllCategory() {
    return this.categoryService.getAll();
  }
  @Query(() => Category)
  async getCategoryById(@Args('id') id: number) {
    return this.categoryService.getOneById(id);
  }
  @Mutation(()=> Category)
  async createCategory(@Args("name")  name: string, @Args("description") description: string){
    const category: CategoryDTO = {
        name,
        description,
    }
    return this.categoryService.createCategory(category)
  }
  @Mutation(()=> Category)
  async deleteCategory(@Args('id') id : number){
    return this.categoryService.deleteById(id);
  }
  @Mutation(()=>Category)
  async updateCategory(@Args('id') id:number, @Args('name') name: string, @Args('description') description: string ){
    const category: CategoryDTO = {
      name,
      description,
    }
    return this.categoryService.updateCategory(id, category)
  }
}

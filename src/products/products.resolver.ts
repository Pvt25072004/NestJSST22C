import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './product.entity';
import { ProductDTO } from './productDTO';

@Resolver()
export class ProductsResolver {
    constructor(private productService: ProductsService) {}
    @Query(() => [Product])
    async getAllProducts() {
        return this.productService.getAll();
    }
    @Query(() => Product)
    async getProductById(@Args('id') id: number) {
        return this.productService.getDetail(id);
    }
    @Mutation(()=> Product)
    async createProduct(@Args("name")  name: string, @Args("price") price: number){
        const product: ProductDTO = {
            name,
            description: "string",
            price,
            quantity: "12",
        }
        return this.productService.createProduct(product)
    }
    @Mutation(()=> Product)
    async deleteProduct(@Args('id') id : number){
    return this.productService.deleteProduct(id);
    }
    @Mutation(()=>Product)
    async updateProduct(@Args('id') id: number, 
        @Args('name')  name: string,
        @Args('description') description: string, 
        @Args('price') price: number,
        @Args('quantity') quantity: string,
        @Args('category') category: number){
        const product: ProductDTO = {
            name,
            description,
            price,
            quantity,
            category,
        }
        return this.productService.updateProduct(id, product)
    }
}

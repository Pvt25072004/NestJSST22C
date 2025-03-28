import { Query, Resolver } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './product.entity';

@Resolver()
export class ProductsResolver {
    constructor(private productService: ProductsService) {}
    @Query(() => [Product])
    async getAllProducts() {
        return this.productService.getAll();
    }
}

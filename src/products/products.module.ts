import { Module } from '@nestjs/common';

import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { BrandController } from './controllers/brand.controller';

import { ProductsService } from './services/products.service';
import { CategoriesService } from './services/categories.service';
import { BrandsService } from './services/brands.service';

@Module({
    controllers: [ProductsController, CategoriesController, BrandController],
    providers: [ProductsService, CategoriesService, BrandsService],
    exports: [ProductsService],
})
export class ProductsModule {}

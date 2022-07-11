import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { OrderController } from './controllers/order.controller';
import { CustomerController } from './controllers/customer.controller';
import { BrandController } from './controllers/brand.controller';
import { ProductsService } from './services/products.service';
import { CategoriesService } from './services/categories.service';
import { BrandsService } from './services/brands.service';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, CategoriesController, OrderController, CustomerController, BrandController],
  providers: [AppService, ProductsService, CategoriesService, BrandsService],
})
export class AppModule {}

import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  //ParseIntPipe,
} from '@nestjs/common';

import { ProductsService } from './../services/products.service';
import { ParseIntPipe } from '../common/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService){

  }

  @Get('filter')
  getProductFilter() {
    return {
      message: `yo soy un filter`,
    };
  }

  @Get()
  getProducts() {
    return this.productsService.findAll();
  }

  @Get(':productId')
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    return this.productsService.findOne(productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateProductDto) {
    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}

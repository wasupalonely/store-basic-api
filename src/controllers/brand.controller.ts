import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from 'src/dtos/brands.dtos';

import { BrandsService } from '../services/brands.service';

@Controller('brand')
export class BrandController {
  constructor(private brandsService: BrandsService){}


  @Get()
  getBrands() {
    return this.brandsService.findAll();
  }

  @Get(':id')
  getBrand(@Param('id', ParseIntPipe) id: number) {
    return this.brandsService.findById(id);
  }

  @Post()
  create(@Body() data: CreateBrandDto) {
    return this.brandsService.create(data);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateBrandDto) {
    return this.brandsService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.brandsService.remove(id);
  }
}

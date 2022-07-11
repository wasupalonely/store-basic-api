import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Query,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('order')
export class OrderController {
  @Get()
  getOrders(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: `orders: limit=> ${limit} offset=> ${offset}`,
    };
  }

  @Get(':orderId')
  getOne(@Param('orderId') orderId: string) {
    return {
      message: `order ${orderId}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: '¡Orden creada!',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id: id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return id;
  }
}

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

@Controller('customer')
export class CustomerController {
  @Get()
  getCustomers(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: `customers: limit=> ${limit} offset=> ${offset}`,
    };
  }

  @Get(':customerId')
  getOne(@Param('customerId') customerId: string) {
    return {
      message: `customer ${customerId}`,
    };
  }

  @Post()
  create(@Body() data: any) {
    return {
      message: '¡Customer creado!',
      data,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() customerInfo: any) {
    return {
      id: id,
      customerInfo,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return id;
  }
}

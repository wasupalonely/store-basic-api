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
import { CreateCustomerDto, UpdateCustomerDto } from 'src/dtos/customers.dto';
import { CustomersService } from 'src/services/customers.service';

@Controller('customer')
export class CustomerController {
  constructor(private customersService: CustomersService){}

  @Get()
  getCustomers() {
    return this.customersService.findAll();
  }

  @Get(':customerId')
  getOne(@Param('customerId', ParseIntPipe) customerId: number) {
    return this.customersService.findOne(customerId);
  }

  @Post()
  create(@Body() data: CreateCustomerDto) {
    return this.customersService.create(data)
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() customerInfo: UpdateCustomerDto) {
    return this.customersService.update(id, customerInfo);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.customersService.remove(id);
  }
}

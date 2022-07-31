import { Controller, Get, Param, ParseIntPipe, Post, Put, Delete, Body } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './../dtos/users.dto';
import { UsersService } from './../services/users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    getCustomers() {
      return this.usersService.findAll();
    }
  
    @Get(':customerId')
    getOne(@Param('customerId', ParseIntPipe) userId: number) {
      return this.usersService.findOne(userId);
    }

    @Get(':id/orders')
    getOrders(@Param('id', ParseIntPipe) id: number) {
      return this.usersService.getOrderByUser(id);
    }
  
    @Post()
    create(@Body() data: CreateUserDto) {
      return this.usersService.create(data)
    }
  
    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() userInfo: UpdateUserDto) {
      return this.usersService.update(id, userInfo);
    }
  
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
      return this.usersService.remove(id);
    }
}

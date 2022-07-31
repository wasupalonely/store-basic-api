import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto, UpdateCustomerDto } from './../dtos/customers.dto';
import { Customer } from './../entities/customer.entity';

@Injectable()
export class CustomersService {
  private counterId = 1;
  private customers: Customer[] = [
    {
      id: 1,
      name: 'Pedro',
      lastName: 'Porro',
      phone: '3134567567',
      email: 'pedro@gmail.com',
    },
  ];

  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    const customer = this.customers.find((item) => item.id === id);
    if (!customer) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    return customer;
  }

  create(data: CreateCustomerDto) {
    this.counterId = this.counterId + 1;
    const newCustomer = {
      id: this.counterId,
      ...data,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }

  update(id: number, data: UpdateCustomerDto) {
    const customer = this.findOne(id);
    if (customer) {
      const index = this.customers.findIndex((item) => item.id === id);
      this.customers[index] = {
        ...customer,
        ...data,
      };
      return this.customers[index];
    }
    return null;
  }

  remove(id: number) {
    const foundCustomer = this.findOne(id);
    this.customers.splice(this.customers.indexOf(foundCustomer), 1);

    return {
      message: `Customer ${foundCustomer.id} eliminado!`,
    };
  }
}

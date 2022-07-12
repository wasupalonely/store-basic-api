import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateCustomerDto } from 'src/dtos/customers.dto';
import { CreateUserDto, UpdateUserDto } from 'src/dtos/users.dto';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UsersService {
  private counterId = 1;
  private users: User[] = [
    {
      id: 1,
      email: 'testuser@mail.com',
      password: 'password123',
      role: 'cajero',
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((item) => item.id === id);
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  create(data: CreateUserDto) {
    this.counterId = this.counterId + 1;
    const newUser = {
      id: this.counterId,
      ...data,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, data: UpdateUserDto) {
    const user = this.findOne(id);
    if (user) {
      const index = this.users.findIndex((item) => item.id === id);
      this.users[index] = {
        ...user,
        ...data,
      };
      return this.users[index];
    }
    return null;
  }

  remove(id: number) {
    const foundUser = this.findOne(id);
    this.users.splice(this.users.indexOf(foundUser), 1);

    return {
      message: `User ${foundUser.id} eliminado!`,
    };
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from './../dtos/products.dtos';

import { Product } from './../entities/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Porduct 1',
      description: 'Blah',
      price: 122,
      image: '',
      stock: 14,
    },
    {
      id: 2,
      name: 'Porduct 2',
      description: 'Blah',
      price: 122,
      image: '',
      stock: 14,
    },
    {
      id: 3,
      name: 'Porduct 3',
      description: 'Blah',
      price: 122,
      image: '',
      stock: 14,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }
    return null;
  }

  remove(id: number) {
    const foundProduct = this.findOne(id);
    this.products.splice(this.products.indexOf(foundProduct), 1);

    return {
      message: `Producto ${foundProduct.id} eliminado!`,
    };
  }
}

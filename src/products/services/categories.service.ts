import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from './../dtos/categories.dtos';
import { Category } from './../entities/category.entity';

@Injectable()
export class CategoriesService {
  private counterId = 1;
  private categories: Category[] = [
    {
      id: 1,
      name: 'Moda',
      description: 'Contiene todos los productos de ropa y moda en general',
    },
  ];

  findAll() {
    return this.categories;
  }

  findById(id: number) {
    const category = this.categories.find((item) => item.id === id);
    if (!category) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    return category;
  }

  create(data: CreateCategoryDto) {
    this.counterId = this.counterId + 1;
    const newCategory = {
      id: this.counterId,
      ...data,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  update(id: number, data: UpdateCategoryDto) {
    const category = this.findById(id);
    if (category) {
      const index = this.categories.findIndex((item) => item.id === id);
      this.categories[index] = {
        ...category,
        ...data,
      };
      return this.categories[index];
    }
    return null;
  }

  remove(id: number) {
    const foundCategory = this.findById(id);
    this.categories.splice(this.categories.indexOf(foundCategory), 1);

    return {
      message: `Category ${foundCategory.id} removed!`,
    };
  }
}

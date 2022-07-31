import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from './../dtos/brands.dtos';
import { Brand } from './../entities/brand.entity';

@Injectable()
export class BrandsService {
    private counterId = 1;
    private brands: Brand[] = [
        {
            id: 1,
            name: "Avon",
            email: "somosavon@mail.com",
            image: "imgur.com"
        }
    ];

    findAll() {
      return this.brands;
    }

    findById(id: number) {
      const brand = this.brands.find((item) => item.id === id);
      if(!brand){
        throw new NotFoundException(`Brand #${id} not found`);
      }
      return brand;
    }

    create(data: CreateBrandDto) {
      this.counterId = this.counterId + 1;
      const newBrand = {
        id: this.counterId,
        ...data,
      };
      this.brands.push(newBrand);
      return newBrand;
    }

    update(id: number, data: UpdateBrandDto) {
      const brand = this.findById(id);
      if (brand) {
        const index = this.brands.findIndex((item) => item.id === id);
        this.brands[index] = {
          ...brand,
          ...data
        };
        return this.brands[index];
      }
      return null;
    }

    remove(id: number) {
      const foundBrand = this.findById(id);
      this.brands.splice(this.brands.indexOf(foundBrand), 1);
  
      return {
        message: `Brand ${foundBrand.id} removed!`
      };
    }
}

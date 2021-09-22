import { Controller, Get, Post } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  all() {
    return this.productService.findAll();
  }
  @Post()
  create(createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @EventPattern('getProductsEvent')
  async getProductsEvent(data: string) {
    console.log(data);
    return this.productService.findAll();
  }
}

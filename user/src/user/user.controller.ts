import { Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('user')
export class UserController {
  constructor(
    @Inject('PRODUCT_SERVICE') private readonly client: ClientProxy,
  ) {}
  @Get()
  all() {
    // return this.productService.findAll();
    this.client.emit('getProductsEvent', 'get all products');
  }
  // @Post()
  // create(createProductDto: CreateProductDto) {
  //   return this.productService.create(createProductDto);
  // }
}

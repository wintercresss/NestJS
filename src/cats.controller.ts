import { Controller, Get, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
  
  @Get('orange')
  findOrange(): string {
    return 'this is an orange cat!'
  }

  @Post()
  create(): string {
    return 'This action creates a new cat'
  }
}
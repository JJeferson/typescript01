import { Get, Controller, Put, Post, Body, Param, Delete } from '@nestjs/common';
import { produto } from '../model/produto';
import { produtoservice } from '../service/produtoservice';

@Controller('produtos')
export class produtocontroller {
  constructor(private readonly service: produtoservice) {

  }

  @Post()
  async create(@Body() model: produto) {
    return await this.service.create(model);
  }

  @Get()
  async get(): Promise<produto[]> {
    return await this.service.get();
  }

  @Put(':id')
  async update(@Param('id') id, @Body() model: produto) {
    return await this.service.update(id, model);
  }

  @Delete(':id')
  async remove(@Param('id') id) {
    return await this.service.remove(id);
  }
}
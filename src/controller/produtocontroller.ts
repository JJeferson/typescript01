import { Get, Controller, Put, Post, Body, Param, Delete } from '@nestjs/common';
import { produto } from '../model/produto';
import { produtoservice } from '../service/produtoservice';

@Controller('produtos')
export class produtocontroller {
  constructor(private readonly service: produtoservice) {

  }

  @Post('novo')
  async create(@Body() model: produto) {
    return await this.service.create(model);
  }

  @Get('todos')
  async get(): Promise<produto[]> {
    return await this.service.get();
  }

  @Get('produto/:id')
  async getid(@Param('id') id:String): Promise<produto> {
    return await this.service.getid(id);
  }

  @Put('produto')
  async update(@Body() model: produto) {
    return await this.service.update(model._id, model);
  }

  @Delete('delete/:id')
  async remove(@Param('id') id) {
    return await this.service.remove(id);
  }
}
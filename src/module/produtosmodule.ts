import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { produtocontroller } from '../controller/produtocontroller';
import { produtoservice } from '../service/produtoservice';
import { produtoschema } from '../schema/produtoschema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'produto', schema: produtoschema }])],
  controllers: [produtocontroller],
  providers: [produtoservice],
})
export class produtosmodule {}
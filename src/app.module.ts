import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { produtocontroller } from './controller/produtocontroller';
import { produtoservice } from './service/produtoservice';

@Module({
  imports: [],
  controllers: [produtocontroller],
  providers: [produtoservice],
})
export class AppModule {}

import { Module } from '@nestjs/common'; 
import { produto } from './model/produto';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module'; 

@Module({
  imports: [
    produto,
    MongooseModule.forRoot('mongodb://localhost/crud-typescript-api-project'),
   // MongooseModule.forRoot('mongodb://<nomedeusuario>:<senha>@ds113853.mlab.com:13853/crud-project'),
  ],
})
export class AppModule {}

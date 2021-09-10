import { Module } from '@nestjs/common'; 
import { produtosmodule } from './module/produtosmodule'; 
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module'; 

@Module({
  imports: [
    produtosmodule,
    MongooseModule.forRoot('mongodb://localhost/crud-typescript-api-project'),
   // MongooseModule.forRoot('mongodb://<nomedeusuario>:<senha>@ds113853.mlab.com:13853/crud-project'),
  ],
})
export class AppModule {}

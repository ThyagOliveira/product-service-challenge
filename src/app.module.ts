import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { ProductSchema } from './products/schemas/products.schemas';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot('mongodb://localhost/challenge-product-service-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

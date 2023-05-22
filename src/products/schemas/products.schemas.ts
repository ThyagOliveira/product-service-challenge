import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

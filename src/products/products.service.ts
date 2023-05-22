import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Model } from 'mongoose';
import { IProduct } from './interface/products.interface';

@Injectable()
export class ProductsService {
  constructor(@InjectModel('Product') private productModel: Model<IProduct>) {}

  async create(createProductDto: CreateProductDto): Promise<IProduct> {
    const newProduct = await new this.productModel(createProductDto);

    return newProduct.save();
  }

  async findAll(): Promise<IProduct[]> {
    return this.productModel.find().exec();
  }

  async findOne(id: string): Promise<IProduct> {
    return this.productModel.findById(id).exec();
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    return this.productModel
      .findByIdAndUpdate(id, updateProductDto, {
        new: true,
      })
      .exec();
  }

  async remove(id: string): Promise<IProduct> {
    return this.productModel.findByIdAndDelete(id).exec();
  }
}

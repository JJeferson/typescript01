import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { produto } from '../model/produto';

@Injectable()
export class produtoservice{
  constructor(@InjectModel('produto') private readonly model: Model<produto>) {

  }

  async get(): Promise<produto[]> {
    return await this.model.find().exec();
  }

  async create(model: produto): Promise<produto> {
    const item = new this.model(model);
    return await item.save();
  }

  async update(id: string, model: produto): Promise<produto> {
    return await this.model.findByIdAndUpdate(id, model);
  }

  async remove(id: BigInteger): Promise<boolean> {
    try {
      await this.model.findOneAndDelete(id);
      return true;
    } catch (e) {
      return e;
    }
  }
}
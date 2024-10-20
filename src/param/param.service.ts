import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Param } from './schemas/param.schema';

@Injectable()
export class ParamService {
  constructor(
    @InjectModel(Param.name) private paramModel: Model<Param>,
  ) {}

  // Find items based on query parameters
  async queryParams(category: string): Promise<Param[]> {
    // Create a filter object
    const filter: any = {};

    if (category) {
      filter.category = category;
    }

    // Execute the query
    return this.paramModel.find(filter).exec();
  }

}

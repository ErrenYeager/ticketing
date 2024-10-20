import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Param extends Document {
  @Prop({ required: true, unique: true })
  category: string;

  @Prop({ default: [] })
  value: string;
}

export const ParamSchema = SchemaFactory.createForClass(Param);
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Sequence extends Document {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ default: 0 })
  value: number;
}

export const SequenceSchema = SchemaFactory.createForClass(Sequence);

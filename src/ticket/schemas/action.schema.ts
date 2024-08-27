import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type ActionDocument = Action & Document;

@Schema()
export class Action {
    @Prop()
    callerId : string;

    @Prop()
    author : string;

    @Prop()
    note : string;

    @Prop()
    contactId : string;

    @Prop()
    contactFile : string;
}

export const ActionSchema = SchemaFactory.createForClass(Action);
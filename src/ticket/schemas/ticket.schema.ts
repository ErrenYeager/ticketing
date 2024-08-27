import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Action, ActionSchema } from "./action.schema";
import { Document } from 'mongoose';

export type TicketDocument = Ticket & Document;

@Schema()
export class Ticket {
    @Prop({required : true, unique : true})
    referenceNumber : string;

    @Prop({ default : "Unknown"})
    callerName : string;

    @Prop({required : true})
    region : string;

    @Prop({required : true})
    topic : string;

    @Prop({required : true})
    status : string;

    @Prop({type : Date})
    createdAt: Date;

    @Prop({type: [ActionSchema], default : []})
    actions : Action[];
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);


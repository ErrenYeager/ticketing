import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Ticket, TicketSchema } from './schemas/ticket.schema';
import { SequenceService } from 'src/common/sequence/sequence.service';
import { Sequence, SequenceSchema } from 'src/common/sequence/schemas/sequence.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Ticket.name, schema: TicketSchema }]),
    MongooseModule.forFeature([{ name: Sequence.name, schema: SequenceSchema }]),
  ],
  controllers: [TicketController],
  providers: [TicketService, SequenceService],
})
export class TicketModule {}

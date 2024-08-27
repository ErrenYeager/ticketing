import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket, TicketDocument } from './schemas/ticket.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Action } from './schemas/action.schema';
import { ActionDto } from './dto/action.dto';

@Injectable()
export class TicketService {
  constructor(@InjectModel(Ticket.name) private ticketModel: Model<TicketDocument>) {}


  async create(createTicketDto: CreateTicketDto): Promise<Ticket> {
    const createTicket = new this.ticketModel(createTicketDto);
    return createTicket.save();

  }

  async findAll(): Promise<Ticket[]> {
    return this.ticketModel.find().exec();
  }

  async findOne(id: string): Promise<Ticket> {
    const ticket = await this.ticketModel.findById(id).exec();
    if (!ticket) {
      throw new NotFoundException(`Ticket with ID ${id} not found`);
    }
    return ticket;
  }

  async update(id: string, updateTicketDto: UpdateTicketDto): Promise<Ticket> {
    const existingTicket = await this.ticketModel.findByIdAndUpdate(id, updateTicketDto, { new: true }).exec();
    if (!existingTicket) {
      throw new NotFoundException(`Ticket with ID ${id} not found`);
    }
    return existingTicket;
  }

  async remove(id: string): Promise<Ticket> {
    const deletedTicket = await this.ticketModel.findByIdAndDelete(id).exec();
    if (!deletedTicket) {
      throw new NotFoundException(`Ticket with ID ${id} not found`);
    }
    return deletedTicket;
  }

  async addAction(ticketId: string, actionDto : ActionDto) : Promise<Ticket> {
    const ticket = await this.ticketModel.findById(ticketId).exec();
    if (!ticket) {
      throw new NotFoundException(`Ticket with ID ${ticketId} not found`);
    }
    
    if (!ticket.actions) {
      ticket.actions = [];
    } else {
      ticket.actions.push(actionDto);
    }
    return ticket.save();
  }
}

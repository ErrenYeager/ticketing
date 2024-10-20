import { Controller, Get, Post, Body, Patch, Param, Delete, ConflictException, Query } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { ActionDto } from './dto/action.dto';
import { QueryTicketsDto } from './dto/query-tickets.dto';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) { }

  @Post()
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketService.create(createTicketDto);
  }

  // @Get()
  // findAll() {
  //   return this.ticketService.findAll();
  // }

  @Get()
  findItems(@Query() query: QueryTicketsDto) {    
    return this.ticketService.queryTickets(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);

    return this.ticketService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTicketDto: UpdateTicketDto) {
    return this.ticketService.update(id, updateTicketDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketService.remove(id);
  }

  @Post(':id/actions')
  async addAction(@Param('id') userId: string, @Body() actionDto: ActionDto) {
    return this.ticketService.addAction(userId, actionDto);
  }

}

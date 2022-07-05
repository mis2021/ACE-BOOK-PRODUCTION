import { Injectable } from '@nestjs/common';
import { paginate } from 'src/common/pagination/paginate';
import { TicketEnt } from './entities/ticket.entity';
import moment from 'moment';
// import  Ticket  from './entities/ticket.entity';
import Ticket from '@models/Transactionals/Tickets';
import {   TicketId, UpsertTicketInput } from './dto/ticket.input';
import { PaginationArgs } from 'src/common/dto/pagination.args';

@Injectable()
export class TicketService {
  async upsert(upsertInput: UpsertTicketInput): Promise<TicketEnt> {
    let savedData;
    if (upsertInput._id) {
      savedData = await Ticket.findOneAndUpdate(
        { _id: upsertInput._id },
        { $set: upsertInput },
        { new: true },
      );
    } else {
      savedData = new Ticket({
        subject: upsertInput.subject,
        description: upsertInput.description,
      });
      await savedData.save();
    }

    return savedData;
  }

  async delete(upsertInput: TicketId): Promise<TicketEnt> {
    let removedData = await Ticket.findOneAndDelete({
      _id: upsertInput._id,
    });

    return removedData;
  }

  async findAll({ page, first }: PaginationArgs) {
    const ticket: TicketEnt[] = await Ticket.find();
    return {
      data: ticket,
      paginatorInfo: paginate(
        ticket.length,
        page,
        first,
        ticket.length,
      ),
    };
  }
}

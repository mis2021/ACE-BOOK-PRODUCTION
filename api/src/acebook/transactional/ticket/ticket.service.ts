import { Injectable } from '@nestjs/common';
import { paginate } from 'src/common/pagination/paginate';
import { TicketEnt } from './entities/ticket.entity';
import moment from 'moment';
// import  Ticket  from './entities/ticket.entity';
import Ticket from '@models/Transactionals/Tickets';
import {   TicketId, UpsertTicketInput } from './dto/ticket.input';
import { PaginationArgs } from 'src/common/dto/pagination.args';
import Post from '@models/Transactionals/Posts';
import { TicketPaginatorArg } from './dto/ticket.args';

const objectFilters = (args: TicketPaginatorArg) => {
  if (args._id ) {
    return { _id: args._id }
  }
  return {}
}

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
      savedData  = new Ticket(upsertInput);
      //  savedData = new Ticket({
      //   subject: upsertInput.subject,
      //   description: upsertInput.description,
      // });
      await savedData.save();


      if(upsertInput.postOrigin){
       await Post.findOneAndUpdate(
          { _id: upsertInput.postOrigin },
          { $set: {ticket: savedData._id} },
          { new: true },
        )
      }
    }

    return savedData;
  }

  async delete(upsertInput: TicketId): Promise<TicketEnt> {
    let removedData = await Ticket.findOneAndDelete({
      _id: upsertInput._id,
    });

    return removedData;
  }

  async findEnt(payload:  TicketPaginatorArg) {
    let filters = objectFilters(payload as TicketPaginatorArg);
    const ticket: TicketEnt[] = await Ticket.find(filters)
    .populate('requestingDepartment')
    .populate('serviceDepartment')
    .populate('createdBy')
    .populate('requestedBy')
    .populate('postOrigin')
    .populate({ path: 'approvers.user', model: 'MUser' })
    ;
    return {
      data: ticket,
      paginatorInfo: paginate(
        ticket.length,
        payload.page,
        payload.first,
        ticket.length,
      ),
    };
  }
  
}

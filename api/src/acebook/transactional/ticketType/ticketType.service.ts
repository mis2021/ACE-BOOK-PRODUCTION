import { Injectable } from '@nestjs/common';
import { paginate } from 'src/common/pagination/paginate';
import { TicketTypeEnt } from './entities/ticketType.entity';
import moment from 'moment';
// import  TicketType  from './entities/ticketType.entity';
import TicketType from '@models/Masterdata/TicketType';
import {   TicketTypeId, UpsertTicketTypeInput } from './dto/ticketType.input';
import { PaginationArgs } from 'src/common/dto/pagination.args';

@Injectable()
export class TicketTypeService {
  async upsert(upsertInput: UpsertTicketTypeInput): Promise<TicketTypeEnt> {
    let savedData;
    if (upsertInput._id) {
      savedData = await TicketType.findOneAndUpdate(
        { _id: upsertInput._id },
        { $set: upsertInput },
        { new: true },
      );
    } else {
      savedData = new TicketType({
        name: upsertInput.name,
        code: upsertInput.code,
      });
      await savedData.save();
    }

    return savedData;
  }

  async delete(upsertInput: TicketTypeId): Promise<TicketTypeEnt> {
    let removedData = await TicketType.findOneAndDelete({
      _id: upsertInput._id,
    });

    return removedData;
  }

  async findAll({ page, first }: PaginationArgs) {
    const ticketType: TicketTypeEnt[] = await TicketType.find();
    return {
      data: ticketType,
      paginatorInfo: paginate(
        ticketType.length,
        page,
        first,
        ticketType.length,
      ),
    };
  }
}

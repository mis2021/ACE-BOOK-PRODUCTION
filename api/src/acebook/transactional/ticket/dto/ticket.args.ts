import { ArgsType, ObjectType } from '@nestjs/graphql';

import { PaginationArgs } from 'src/common/dto/pagination.args';

import { PaginatorInfo } from 'src/common/dto/paginator-info.model';
import { TicketEnt } from '../entities/ticket.entity';

@ObjectType()
export class TicketPaginator {
  data: TicketEnt[];
  paginatorInfo: PaginatorInfo;
}



// @ArgsType()
// export class GetMusersArgs extends PaginationArgs {
//   username?: string;
// }

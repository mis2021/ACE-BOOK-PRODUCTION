import { ArgsType, ObjectType } from '@nestjs/graphql';

import { PaginationArgs } from 'src/common/dto/pagination.args';

import { PaginatorInfo } from 'src/common/dto/paginator-info.model';
import { TicketTypeEnt } from '../entities/ticketType.entity';

@ObjectType()
export class TicketTypePaginator {
  data: TicketTypeEnt[];
  paginatorInfo: PaginatorInfo;
}


@ArgsType()
export class TicketTypePaginatorArg extends PaginationArgs {
  code?: string;
}

// @ArgsType()
// export class GetMusersArgs extends PaginationArgs {
//   username?: string;
// }

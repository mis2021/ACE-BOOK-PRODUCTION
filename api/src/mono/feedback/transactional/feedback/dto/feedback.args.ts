import { ArgsType, ObjectType } from '@nestjs/graphql';

import { PaginationArgs } from 'src/common/dto/pagination.args';

import { PaginatorInfo } from 'src/common/dto/paginator-info.model';
import { FeedbackEnt } from '../entities/feedback.entity';

@ObjectType()
export class FeedbackPaginator {
  data: FeedbackEnt[];
  paginatorInfo: PaginatorInfo;
}



// @ArgsType()
// export class GetMusersArgs extends PaginationArgs {
//   username?: string;
// }

import { ArgsType, ObjectType } from '@nestjs/graphql';

import { PaginationArgs } from 'src/common/dto/pagination.args';

import { PaginatorInfo } from 'src/common/dto/paginator-info.model';
import { FbQuestionEnt } from '../entities/fbQuestion.entity';

@ObjectType()
export class FbQuestionPaginator {
  data: FbQuestionEnt[];
  paginatorInfo: PaginatorInfo;
}



// @ArgsType()
// export class GetMusersArgs extends PaginationArgs {
//   username?: string;
// }

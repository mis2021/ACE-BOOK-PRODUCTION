import { ArgsType, ObjectType } from '@nestjs/graphql';

import { PaginationArgs } from 'src/common/dto/pagination.args';

import { PaginatorInfo } from 'src/common/dto/paginator-info.model';
import { FbCategoryQuestionEnt } from '../entities/fbCategoryQuestion.entity';

@ObjectType()
export class FbCategoryQuestionPaginator {
  data: FbCategoryQuestionEnt[];
  paginatorInfo: PaginatorInfo;
}



// @ArgsType()
// export class GetMusersArgs extends PaginationArgs {
//   username?: string;
// }

import { ArgsType, ObjectType } from '@nestjs/graphql';

import { PaginationArgs } from 'src/common/dto/pagination.args';

import { PaginatorInfo } from 'src/common/dto/paginator-info.model';
import { FbCategoryEnt } from '../entities/fbCategory.entity';

@ObjectType()
export class FbCategoryPaginator {
  data: FbCategoryEnt[];
  paginatorInfo: PaginatorInfo;
}



// @ArgsType()
// export class GetMusersArgs extends PaginationArgs {
//   username?: string;
// }

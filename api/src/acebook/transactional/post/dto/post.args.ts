import { ArgsType, ObjectType } from '@nestjs/graphql';

import { PaginationArgs } from 'src/common/dto/pagination.args';

import { PaginatorInfo } from 'src/common/dto/paginator-info.model';
import { PostEnt } from '../entities/post.entity';

@ObjectType()
export class PostPaginator {
  data: PostEnt[];
  paginatorInfo: PaginatorInfo;
}

@ArgsType()
export class PostPaginatorArg extends PaginationArgs {
  departmentId?: string;
}



// @ArgsType()
// export class GetMusersArgs extends PaginationArgs {
//   username?: string;
// }

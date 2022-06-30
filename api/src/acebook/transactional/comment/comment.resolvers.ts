import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { PaginationArgs } from 'src/common/dto/pagination.args';
import { CommentService } from './comment.service';
import { CommentId, UpsertCommentInput } from './dto/comment.input';
import { CommentPaginator, CommentPaginatorArg, CommentResponse} from './dto/comment.args';
import { CommentEnt } from './entities/comment.entity';

@Resolver(() => CommentEnt)
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}

  @Mutation(() => CommentEnt)
  async upsertComment(
    @Args('input') upsertInput: UpsertCommentInput,
  ): Promise<CommentEnt> {

    return this.commentService.upsert(upsertInput);
  }

  @Mutation(() => CommentEnt)
  async deleteComment(
    @Args('input') deleteInput: CommentId,
  ): Promise<CommentEnt> {

    return this.commentService.delete(deleteInput);
  }

  @Query(() => CommentPaginator, { name: 'comments' })
  getTags(@Args() getArgs: CommentPaginatorArg) {
    return this.commentService.findAll(getArgs);
  }

 

 
}

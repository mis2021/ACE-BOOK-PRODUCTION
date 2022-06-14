import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { PaginationArgs } from 'src/common/dto/pagination.args';
import { PostService } from './post.service';
import { PostId, UpsertPostInput } from './dto/post.input';
import { PostPaginator, PostPaginatorArg} from './dto/post.args';
import { PostEnt } from './entities/post.entity';

@Resolver(() => PostEnt)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation(() => PostEnt)
  async upsertPost(
    @Args('input') upsertInput: UpsertPostInput,
  ): Promise<PostEnt> {

    return this.postService.upsert(upsertInput);
  }

  @Mutation(() => PostEnt)
  async deletePost(
    @Args('input') deleteInput: PostId,
  ): Promise<PostEnt> {

    return this.postService.delete(deleteInput);
  }

  // @Query(() => PostPaginator, { name: 'posts' })
  @Query(() => PostPaginator, { name: 'posts' })
  getTags(@Args() getArgs: PostPaginatorArg) {
    return this.postService.findAll(getArgs);
  }

 

 
}

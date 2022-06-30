import { Module } from '@nestjs/common';
import { PostResolver } from './post.resolvers';
import { PostService } from './post.service';

@Module({
  providers: [PostResolver, PostService]
})
export class PostModule {}


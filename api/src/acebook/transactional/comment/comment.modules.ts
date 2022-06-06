import { Module } from '@nestjs/common';
import { CommentResolver } from './comment.resolvers';
import { CommentService } from './comment.service';

@Module({
  providers: [CommentResolver, CommentService]
})
export class CommentModule {}


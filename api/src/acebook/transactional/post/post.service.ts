import { Injectable } from '@nestjs/common';
import { paginate } from 'src/common/pagination/paginate';
import { PostEnt } from './entities/post.entity';
import moment from 'moment';
// import  Post  from './entities/post.entity';
import Post from '@models/Transactionals/Posts';
import {   PostId, UpsertPostInput } from './dto/post.input';
import { PaginationArgs } from 'src/common/dto/pagination.args';

@Injectable()
export class PostService {
  async upsert(upsertInput: UpsertPostInput): Promise<PostEnt> {
    let savedData;
    if (upsertInput._id) {
      // savedData = await Post.findOneAndUpdate(
      //   { _id: upsertInput._id },
      //   { $set: upsertInput },
      //   { new: true },
      // );
    } else {
      savedData = new Post({
        content: upsertInput.content,
      });
      await savedData.save();
    }

    return savedData;
  }

  async delete(upsertInput: PostId): Promise<PostEnt> {
    let removedData = await Post.findOneAndDelete({
      _id: upsertInput._id,
    });

    return removedData;
  }

  async findAll({ page, first }: PaginationArgs) {
    const post: PostEnt[] = await Post.find();
    return {
      data: post,
      paginatorInfo: paginate(
        post.length,
        page,
        first,
        post.length,
      ),
    };
  }
}

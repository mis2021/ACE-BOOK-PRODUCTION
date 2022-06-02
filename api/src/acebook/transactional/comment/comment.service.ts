import { Injectable } from '@nestjs/common';
import { paginate } from 'src/common/pagination/paginate';
import { CommentEnt } from './entities/comment.entity';
import moment from 'moment';
// import  Comment  from './entities/comment.entity';
import Comment from '@models/Transactionals/Comments';
import {   CommentId, UpsertCommentInput } from './dto/comment.input';
import { PaginationArgs } from 'src/common/dto/pagination.args';

@Injectable()
export class CommentService {
  async upsert(upsertInput: UpsertCommentInput): Promise<CommentEnt> {
    let savedData;
    if (upsertInput._id) {
      savedData = await Comment.findOneAndUpdate(
        { _id: upsertInput._id },
        { $set: upsertInput },
        { new: true },
      );
    } else {
      savedData = new Comment({
        message: upsertInput.message,
        user: upsertInput.user,
      });
      await savedData.save();
    }

    return savedData;
  }

  async delete(upsertInput: CommentId): Promise<CommentEnt> {
    let removedData = await Comment.findOneAndDelete({
      _id: upsertInput._id,
    });

    return removedData;
  }

  async findAll({ page, first }: PaginationArgs) {
    const comment: CommentEnt[] = await Comment.find();
    return {
      data: comment,
      paginatorInfo: paginate(
        comment.length,
        page,
        first,
        comment.length,
      ),
    };
  }
}

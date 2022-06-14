import { Injectable } from '@nestjs/common';
import { paginate } from 'src/common/pagination/paginate';
import { PostEnt } from './entities/post.entity';
import moment from 'moment';
// import  Post  from './entities/post.entity';
import Post from '@models/Transactionals/Posts';
import {   PostId, UpsertPostInput } from './dto/post.input';
import { PaginationArgs } from 'src/common/dto/pagination.args';
import { PostPaginatorArg } from './dto/post.args';

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
      savedData = new Post(upsertInput);
      // savedData = new Post({
      //   content: upsertInput.content,
      //   privacy: upsertInput.privacy,
      //   createdBy: upsertInput.createdBy,
      //   createdByDepartment: upsertInput.createdByDepartment,
      //   taggedDepartments: upsertInput.taggedDepartments
      // });
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

  async findAll({ page, first, departmentId }: PostPaginatorArg) {
  // async findAll({ page, first }: PaginationArgs) {
    // "628bb071bb4d714edda24939"
    const post: PostEnt[] = await Post.find(departmentId ? {taggedDepartments: departmentId} : {})
    .populate({path: 'createdBy', populate:{ path: 'departmentOnDuty', model: 'Department'}})
    .populate('createdByDepartment')
    .populate('taggedDepartments');


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

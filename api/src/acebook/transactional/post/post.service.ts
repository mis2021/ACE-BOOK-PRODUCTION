import { Injectable } from '@nestjs/common';
import { paginate } from 'src/common/pagination/paginate';
import { PostEnt } from './entities/post.entity';
import moment from 'moment';
// import  Post  from './entities/post.entity';
import Post from '@models/Transactionals/Posts';
import { PostId, UpsertPostInput } from './dto/post.input';
import { PaginationArgs } from 'src/common/dto/pagination.args';
import { PostPaginatorArg } from './dto/post.args';
import { AttachmentService, saveMultiAttachments } from '../attachment/attachment.service';
import { UpsertAttachmentInput } from '../attachment/dto/attachment.input';
import { Console } from 'console';

const objectFilters = (args: PostPaginatorArg) => {

  if (args.departmentId && args.type == 'tags') {
    return { taggedDepartments: args.departmentId }
  }

  if (args.departmentId && args.type == 'posts') {
    return { createdByDepartment: args.departmentId }
  }

  return {}

}


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
      // savedData = new Post(upsertInput);


      let allAttachments = []
      if (upsertInput.attachments) {
        allAttachments = saveMultiAttachments({
          attachments: upsertInput.attachments,
          user: upsertInput.createdBy
        })
      }

      savedData = new Post({
        content: upsertInput.content,
        privacy: upsertInput.privacy,
        createdBy: upsertInput.createdBy,
        createdByDepartment: upsertInput.createdByDepartment,
        taggedDepartments: upsertInput.taggedDepartments,
        attachments: allAttachments
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


  async findAll({ page, first, departmentId, type, skip }: PostPaginatorArg) {
    // async findAll({ page, first }: PaginationArgs) {
    // const post: PostEnt[] = await Post.find(departmentId ? {taggedDepartments: departmentId} : {})
    let filters = objectFilters({ departmentId, type } as PostPaginatorArg);

    const counter = await Post.countDocuments(filters);
    let limit = 3;

    const post: PostEnt[] = await Post.find(filters)
      .sort({created_at: 'desc'})
      .limit(limit)
      .skip(skip)
      .populate({ path: 'createdBy', populate: { path: 'departmentOnDuty', model: 'Department' } })
      .populate('createdByDepartment')
      .populate('taggedDepartments')
      .populate('attachments');

      let curPage = skip / limit; 
console.log("curPage", curPage)
    return {
      data: post,
      paginatorInfo:{
        count: counter,
        currentPage : curPage,
        perPage: limit
      }
      
      // paginate(
      //   post.length,
      //   curPage,
      //   limit,
      //   counter,
      // ),
      //  paginatorInfo: paginate(
      //   post.length,
      //   page,
      //   first,
      //   post.length,
      // ),
    };
  }
}

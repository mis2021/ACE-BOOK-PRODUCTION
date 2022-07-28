import { Injectable } from '@nestjs/common';
import { paginate } from 'src/common/pagination/paginate';
import { FbCategoryEnt } from './entities/fbCategory.entity';
import moment from 'moment';
// import  FbCategory  from './entities/fbCategory.entity';
import FbCategory from '@models/Feedback/Masterdata/Category';
import {   FbCategoryId, UpsertFbCategoryInput } from './dto/fbCategory.input';
import { PaginationArgs } from 'src/common/dto/pagination.args';

@Injectable()
export class FbCategoryService {
  async upsert(upsertInput: UpsertFbCategoryInput): Promise<FbCategoryEnt> {
    let savedData;
    if (upsertInput._id) {
      savedData = await FbCategory.findOneAndUpdate(
        { _id: upsertInput._id },
        { $set: upsertInput },
        { new: true },
      );
    } else {
      savedData = new FbCategory({
        name: upsertInput.name,
        description: upsertInput.description,
      });
      await savedData.save();
    }

    return savedData;
  }

  async delete(upsertInput: FbCategoryId): Promise<FbCategoryEnt> {
    let removedData = await FbCategory.findOneAndDelete({
      _id: upsertInput._id,
    });

    return removedData;
  }

  async findAll({ page, first }: PaginationArgs) {
    const fbCategory: FbCategoryEnt[] = await FbCategory.find();
    return {
      data: fbCategory,
      paginatorInfo: paginate(
        fbCategory.length,
        page,
        first,
        fbCategory.length,
      ),
    };
  }
}

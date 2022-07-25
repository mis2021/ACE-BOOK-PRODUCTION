import { Injectable } from '@nestjs/common';
import { paginate } from 'src/common/pagination/paginate';
import { FbCategoryQuestionEnt } from './entities/fbCategoryQuestion.entity';
import moment from 'moment';
// import  FbCategoryQuestion  from './entities/fbCategoryQuestion.entity';
import FbCategoryQuestion from '@models/Feedback/Transactional/CategoryQuestion';
import {   FbCategoryQuestionId, UpsertFbCategoryQuestionInput } from './dto/fbCategoryQuestion.input';
import { PaginationArgs } from 'src/common/dto/pagination.args';

@Injectable()
export class FbCategoryQuestionService {
  async upsert(upsertInput: UpsertFbCategoryQuestionInput): Promise<FbCategoryQuestionEnt> {
    let savedData;
    if (upsertInput._id) {
      savedData = await FbCategoryQuestion.findOneAndUpdate(
        { _id: upsertInput._id },
        { $set: upsertInput },
        { new: true },
      );
    } else {
      savedData = new FbCategoryQuestion({
        category: upsertInput.category,
        questions: upsertInput.questions,
      });
      await savedData.save();
    }

    return savedData;
  }

  async delete(upsertInput: FbCategoryQuestionId): Promise<FbCategoryQuestionEnt> {
    let removedData = await FbCategoryQuestion.findOneAndDelete({
      _id: upsertInput._id,
    });

    return removedData;
  }

  async findAll({ page, first }: PaginationArgs) {
    const fbCategoryQuestion: FbCategoryQuestionEnt[] = await FbCategoryQuestion.find()
    .populate("category")
    .populate("questions");
    return {
      data: fbCategoryQuestion,
      paginatorInfo: paginate(
        fbCategoryQuestion.length,
        page,
        first,
        fbCategoryQuestion.length,
      ),
    };
  }
}

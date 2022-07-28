import { Injectable } from '@nestjs/common';
import { paginate } from 'src/common/pagination/paginate';
import { FbQuestionEnt } from './entities/fbQuestion.entity';
import moment from 'moment';
// import  FbQuestion  from './entities/fbQuestion.entity';
import FbQuestion from '@models/Feedback/Masterdata/Question';
import {   FbQuestionId, UpsertFbQuestionInput } from './dto/fbQuestion.input';
import { PaginationArgs } from 'src/common/dto/pagination.args';

@Injectable()
export class FbQuestionService {
  async upsert(upsertInput: UpsertFbQuestionInput): Promise<FbQuestionEnt> {
    let savedData;
    if (upsertInput._id) {
      savedData = await FbQuestion.findOneAndUpdate(
        { _id: upsertInput._id },
        { $set: upsertInput },
        { new: true },
      );
    } else {
      savedData = new FbQuestion({
        question: upsertInput.question,
        description: upsertInput.description,
      });
      await savedData.save();
    }

    return savedData;
  }

  async delete(upsertInput: FbQuestionId): Promise<FbQuestionEnt> {
    let removedData = await FbQuestion.findOneAndDelete({
      _id: upsertInput._id,
    });

    return removedData;
  }

  async findAll({ page, first }: PaginationArgs) {
    const fbQuestion: FbQuestionEnt[] = await FbQuestion.find();
    return {
      data: fbQuestion,
      paginatorInfo: paginate(
        fbQuestion.length,
        page,
        first,
        fbQuestion.length,
      ),
    };
  }
}

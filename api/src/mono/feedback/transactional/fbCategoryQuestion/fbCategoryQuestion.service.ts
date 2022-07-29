import { Injectable } from '@nestjs/common';
import { paginate } from 'src/common/pagination/paginate';
import { FbCategoryQuestionEnt, QuestionInpt } from './entities/fbCategoryQuestion.entity';
import moment from 'moment';
// import  FbCategoryQuestion  from './entities/fbCategoryQuestion.entity';
import FbCategoryQuestion from '@models/Feedback/Transactional/CategoryQuestion';
import { FbCategoryQuestionId, UpsertFbCategoryQuestionInput } from './dto/fbCategoryQuestion.input';
import { PaginationArgs } from 'src/common/dto/pagination.args';
import FbQuestion from '@models/Feedback/Masterdata/Question';
import FbCategory from '@models/Feedback/Masterdata/Category';
import { FCQPaginatorArg } from './dto/fbCategoryQuestion.args';
import mongoose from 'mongoose';
import { saveCategory } from '../../masterdata/fbCategory/fbCategory.service';
import { saveQuestion } from '../../masterdata/fbQuestion/fbQuestion.service';
var ObjectId = require('mongoose').Types.ObjectId;

const objectFilters = (args: FCQPaginatorArg) => {
  if (args._id) {
    return { _id: args._id }

  } else if (args.categoryId) {

    return { 'category': new ObjectId(args.categoryId) }

  } else {
    return {}
  }
}

@Injectable()
export class FbCategoryQuestionService {
  async upsert(upsertInput: UpsertFbCategoryQuestionInput): Promise<FbCategoryQuestionEnt> {
    let savedData;
    let ques = await saveQuestion(upsertInput)
    let cat = await saveCategory(upsertInput)

    // if (upsertInput.questions) {
    //   upsertInput.questions.map(async (item: QuestionInpt) => {
    //     if (item._id) {
    //       ques.push( new ObjectId(item._id) )
    //     } else {
    //       let savedDataQs = new FbQuestion({
    //         question: item.question,
    //         description: '',
    //       });
    //       ques.push(savedDataQs._id)
    //       await savedDataQs.save();
    //     }
    //   })
    // }


    if (upsertInput.categoryId) {

      savedData = await FbCategoryQuestion.findOneAndUpdate(
        { category: new ObjectId(upsertInput.categoryId) },
        {
          $set: {
            category: cat,
            questions: ques,
          }
        },
        { new: true },
      );

    } else {

      savedData = new FbCategoryQuestion({
        category: cat,
        questions: ques,
      });

    }


    await savedData.save();

    return savedData;

  }

  async delete(upsertInput: FbCategoryQuestionId): Promise<FbCategoryQuestionEnt> {
    let removedData = await FbCategoryQuestion.findOneAndDelete({
      _id: upsertInput._id,
    });

    return removedData;
  }

  async findAll(payload: FCQPaginatorArg) {

    let filters = objectFilters(payload as FCQPaginatorArg);

    const fbCategoryQuestion: FbCategoryQuestionEnt[] = await FbCategoryQuestion.find(filters)
      .populate("category")
      .populate("questions");
    return {
      data: fbCategoryQuestion,
      paginatorInfo: paginate(
        fbCategoryQuestion.length,
        payload.page,
        payload.first,
        fbCategoryQuestion.length,
      ),
    };
  }
}

import { Injectable } from '@nestjs/common';
import { paginate } from 'src/common/pagination/paginate';
import { FbCategoryQuestionEnt, QuestionInpt } from './entities/fbCategoryQuestion.entity';
import moment from 'moment';
// import  FbCategoryQuestion  from './entities/fbCategoryQuestion.entity';
import FbCategoryQuestion from '@models/Feedback/Transactional/CategoryQuestion';
import {   FbCategoryQuestionId, UpsertFbCategoryQuestionInput } from './dto/fbCategoryQuestion.input';
import { PaginationArgs } from 'src/common/dto/pagination.args';
import FbQuestion from '@models/Feedback/Masterdata/Question';
import FbCategory from '@models/Feedback/Masterdata/Category';
import { FCQPaginatorArg } from './dto/fbCategoryQuestion.args';
import mongoose from 'mongoose';

const objectFilters = (args: FCQPaginatorArg) => {
  if (args._id) {
    return { _id: args._id }

  }else if (args.categoryId) {
   
    // return { category: mongoose.Types.ObjectId(args.categoryId) }
    return { $match: { category:  args.categoryId } }
    // return { 'category._id': args.categoryId }

  }else{
    return {}
  }
}

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
        let ques = []
        let cat = null

        if(upsertInput.category._id){
          let savedDataCat = new FbCategory(upsertInput.category);
          await savedDataCat.save();
          cat = upsertInput.category._id
        }else{
          let savedDataCat = new FbCategory({
            name: upsertInput.category.name,
            description: upsertInput.category.description,
          });
          await savedDataCat.save();

          cat = savedDataCat._id
        }
        


        if(upsertInput.questions){
           upsertInput.questions.map(async (item : QuestionInpt)=>{
            if(item._id){
              ques.push(item._id)
            }else{
             let savedDataQs = new FbQuestion({
                question: item.question,
                description: '',
              });
              ques.push(savedDataQs._id)
              await savedDataQs.save();
            }
          })
        }

       

      savedData = new FbCategoryQuestion({
        category: cat,
        questions: ques,
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

  async findAll(payload: FCQPaginatorArg) {
    console.log(payload)
    let filters = objectFilters(payload as FCQPaginatorArg);
    console.log(filters)
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

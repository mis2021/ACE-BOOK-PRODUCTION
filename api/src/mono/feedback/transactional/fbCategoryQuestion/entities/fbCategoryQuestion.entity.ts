import { FbCategoryEnt } from '@/mono/feedback/masterdata/fbCategory/entities/fbCategory.entity';
import { FbQuestionEnt } from '@/mono/feedback/masterdata/fbQuestion/entities/fbQuestion.entity';
import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { CoreEntity, CoreEntityMg } from 'src/common/entities/core.entity';

@InputType('FbCategoryQuestionInputType', { isAbstract: true })
@ObjectType()
export class FbCategoryQuestionInput extends CoreEntityMg {
  category: string;
  questions: string[];
}

@InputType('FbCategoryQuestionInputType', { isAbstract: true })
@ObjectType()
export class FbCategoryQuestionEnt extends CoreEntityMg {
  category: FbCategoryEnt;
  questions: FbQuestionEnt[];
}

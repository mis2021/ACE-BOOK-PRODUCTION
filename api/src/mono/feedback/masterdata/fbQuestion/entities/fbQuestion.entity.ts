import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { CoreEntity, CoreEntityMg } from 'src/common/entities/core.entity';

@InputType('FbQuestionInputType', { isAbstract: true })
@ObjectType()
export class FbQuestionEnt extends CoreEntityMg {
  // name: string;
  description: string;
  question: string;
}

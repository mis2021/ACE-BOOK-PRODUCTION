import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { CoreEntity, CoreEntityMg } from 'src/common/entities/core.entity';

@InputType('commentInputType', { isAbstract: true })
@ObjectType()
export class CommentEnt extends CoreEntityMg {
  name: string;
  description: string;
}

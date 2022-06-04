import { ReactionEnt } from '@/acebook/referenceType/reaction.entity';
import { UserEntAB } from '@/users/entities/user.entity';
import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { CoreEntity, CoreEntityMg } from 'src/common/entities/core.entity';

@InputType('commentInputType', { isAbstract: true })
@ObjectType()
export class CommentEnt extends CoreEntityMg {
  message: string;
  user: UserEntAB;
  comments?: CommentEnt[];
  reactions?: ReactionEnt[]
  // name: string;
  // description: string;
}

// NO reation icon details yet
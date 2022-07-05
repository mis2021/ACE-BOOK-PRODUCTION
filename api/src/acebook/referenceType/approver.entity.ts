import { UserEntAB } from '@/users/entities/user.entity';
import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { CoreEntityMg } from 'src/common/entities/core.entity';
import { ReactionIconDetailEnt } from '../masterdata/reactionIconDetails/entities/reactionIconDetail.entity';

@InputType('ApproverInputType', { isAbstract: true })
@ObjectType()
export class ApproverEnt extends CoreEntityMg {
  user: UserEntAB;
  status: string;
  updatedAt: string;
}



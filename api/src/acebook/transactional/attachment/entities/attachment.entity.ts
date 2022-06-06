import { CustomTagEnt } from '@/acebook/masterdata/customTag/entities/customTag.entity';
import { ReactionEnt } from '@/acebook/referenceType/reaction.entity';
import { UserEntAB } from '@/users/entities/user.entity';
import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { CoreEntity, CoreEntityMg } from 'src/common/entities/core.entity';
import { CommentEnt } from '../../comment/entities/comment.entity';

@InputType('AttachmentInputType', { isAbstract: true })
@ObjectType()
export class AttachmentEnt extends CoreEntityMg {
  path: string;
  createdBy?: UserEntAB;
  comments?: CommentEnt[];
  refId?:string;
  originCollection?: string;
  reactions?: ReactionEnt[];
  customTags?: CustomTagEnt[];
}

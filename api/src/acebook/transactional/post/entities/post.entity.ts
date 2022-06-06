import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { CoreEntity, CoreEntityMg } from 'src/common/entities/core.entity';
import {AttachmentEnt} from '@acebook/transactional/attachment/entities/attachment.entity';
import { CommentEnt } from '@acebook/transactional/comment/entities/comment.entity';
import { ReactionEnt } from '@acebook/referenceType/reaction.entity';
import { UserEntAB } from '@/users/entities/user.entity';
import { DepartmentEnt } from '@/acebook/masterdata/department/entities/department.entity';
import { CustomTagEnt } from '@/acebook/masterdata/customTag/entities/customTag.entity';

@InputType('PostInputType', { isAbstract: true })
@ObjectType()
export class PostEnt extends CoreEntityMg {
  content: string;
  attachments?: AttachmentEnt[];
  comments?: CommentEnt[];
  reactions?: ReactionEnt[];
  sharedPost?: PostEnt[];
  createdBy?: UserEntAB;
  createdByDepartment?: DepartmentEnt;
  taggedDepartment?: DepartmentEnt[];
  taggedUsers?: UserEntAB;
  privacy?: string;
  customTags?: CustomTagEnt;
}

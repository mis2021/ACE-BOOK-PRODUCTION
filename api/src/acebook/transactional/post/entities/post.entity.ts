import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { CoreEntity, CoreEntityMg } from 'src/common/entities/core.entity';
import {AttachmentEnt, AttachmentInptObj} from '@acebook/transactional/attachment/entities/attachment.entity';
import { CommentEnt } from '@acebook/transactional/comment/entities/comment.entity';
import { ReactionEnt } from '@acebook/referenceType/reaction.entity';
import { UserEntAB } from '@/users/entities/user.entity';
import { DepartmentEnt } from '@/acebook/masterdata/department/entities/department.entity';
import { CustomTagEnt } from '@/acebook/masterdata/customTag/entities/customTag.entity';



@ObjectType()
export class PostEntCommon extends CoreEntityMg {
  content: string;
  privacy?: string;
}

@ObjectType()
export class PostEnt extends PostEntCommon{
  attachments?: AttachmentEnt[];
  comments?: CommentEnt[];
  reactions?: ReactionEnt[];
  sharedPost?: PostEnt[];
  createdBy?: UserEntAB ;
  createdByDepartment?: DepartmentEnt;
  taggedDepartments?: DepartmentEnt[];
  taggedUsers?: UserEntAB[];
  customTags?: CustomTagEnt;
}

@InputType('PostInputType', { isAbstract: true })
@ObjectType()
export class PostInput extends PostEntCommon{
  attachments?: AttachmentInptObj[];
  comments?: string[];
  reactions?: string[];
  sharedPost?: string;
  createdBy?: string ;
  createdByDepartment?: string;
  taggedDepartments?: string[];
  taggedUsers?: string[];
  customTags?: string;
}

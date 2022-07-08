import { DepartmentEnt } from '@/acebook/masterdata/department/entities/department.entity';
import { ApproverEnt } from '@/acebook/referenceType/approver.entity';
import { UserEntAB } from '@/users/entities/user.entity';
import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { CoreEntity, CoreEntityMg } from 'src/common/entities/core.entity';
import { AttachmentEnt } from '../../attachment/entities/attachment.entity';
import { CommentEnt } from '../../comment/entities/comment.entity';
import { PostEnt } from '../../post/entities/post.entity';

@InputType('TicketInputType', { isAbstract: true })
@ObjectType()
export class TicketEnt extends CoreEntityMg {
  code: string;
  description: string;
  type: string;
  dateNeeded: string;
  dateRequested: string;
  subject: string;
  status: string;
  location: string;
  createdBy: UserEntAB;
  requestedBy: UserEntAB;
  serviceDepartment:DepartmentEnt;
  requestingDepartment:DepartmentEnt;
  comments: CommentEnt[];
  reactions: string[];
  postOrigin: PostEnt;
  works: string[];
  approvers: ApproverEnt[];
  attachments: AttachmentEnt[];
}

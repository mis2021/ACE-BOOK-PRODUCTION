import {
  InputType,
  ObjectType,
  PartialType,
  PickType,
  registerEnumType,
} from '@nestjs/graphql';
import { CommentEnt } from '../entities/comment.entity';

enum Permission {
  SUPER_ADMIN = 'Super admin',
  STORE_OWNER = 'Store owner',
  STAFF = 'Staff',
  CUSTOMER = 'Customer',
}
registerEnumType(Permission, { name: 'restrictionComment' });
@InputType()
export class UpsertCommentInput extends PickType(CommentEnt, [
  'name',
  'description',
  '_id'
]){permission: Permission = Permission.CUSTOMER;}

@InputType()
export class CommentId extends PickType(CommentEnt, [
  '_id'
]){permission: Permission = Permission.CUSTOMER;}

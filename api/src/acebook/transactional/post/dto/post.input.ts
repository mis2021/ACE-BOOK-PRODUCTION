import {
  InputType,
  ObjectType,
  PartialType,
  PickType,
  registerEnumType,
} from '@nestjs/graphql';
import { PostEnt } from '../entities/post.entity';

enum Permission {
  SUPER_ADMIN = 'Super admin',
  STORE_OWNER = 'Store owner',
  STAFF = 'Staff',
  CUSTOMER = 'Customer',
}
registerEnumType(Permission, { name: 'restrictionpost' });
@InputType()
export class UpsertPostInput extends PickType(PostEnt, [
  'content',
  'attachments',
  'comments',
  'reactions',
  'sharedPost',
  'createdBy',
  'createdByDepartment',
  'taggedDepartment',
  'taggedUsers',
  'privacy',
  'customTags',
  '_id'
]){permission: Permission = Permission.CUSTOMER;}

@InputType()
export class PostId extends PickType(PostEnt, [
  '_id'
]){permission: Permission = Permission.CUSTOMER;}

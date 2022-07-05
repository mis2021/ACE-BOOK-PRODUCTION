import {
  InputType,
  ObjectType,
  PartialType,
  PickType,
  registerEnumType,
} from '@nestjs/graphql';
import { TicketEnt } from '../entities/ticket.entity';

enum Permission {
  SUPER_ADMIN = 'Super admin',
  STORE_OWNER = 'Store owner',
  STAFF = 'Staff',
  CUSTOMER = 'Customer',
}
registerEnumType(Permission, { name: 'restrictiontk' });
@InputType()
export class UpsertTicketInput extends PickType(TicketEnt, [
  'subject',
  'description',
  '_id'
]){permission: Permission = Permission.CUSTOMER;}

@InputType()
export class TicketId extends PickType(TicketEnt, [
  '_id'
]){permission: Permission = Permission.CUSTOMER;}

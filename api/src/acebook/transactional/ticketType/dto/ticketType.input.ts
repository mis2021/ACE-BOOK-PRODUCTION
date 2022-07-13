import {
  InputType,
  ObjectType,
  PartialType,
  PickType,
  registerEnumType,
} from '@nestjs/graphql';
import { TicketTypeEnt } from '../entities/ticketType.entity';

enum Permission {
  SUPER_ADMIN = 'Super admin',
  STORE_OWNER = 'Store owner',
  STAFF = 'Staff',
  CUSTOMER = 'Customer',
}
registerEnumType(Permission, { name: 'restrictiontt' });
@InputType()
export class UpsertTicketTypeInput extends PickType(TicketTypeEnt, [
  'name',
  'code',
  '_id'
]){permission: Permission = Permission.CUSTOMER;}

@InputType()
export class TicketTypeId extends PickType(TicketTypeEnt, [
  '_id'
]){permission: Permission = Permission.CUSTOMER;}

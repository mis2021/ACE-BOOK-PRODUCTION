import { MuserEnt } from '@/acebook/musers/entities/muser.entity';
import { UserEntAB } from '@/users/entities/user.entity';
import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { CoreEntity, CoreEntityMg } from 'src/common/entities/core.entity';

@ObjectType()
export class TicketTypeCommon extends CoreEntityMg {
  name?: string;
  code?: string;
}

@ObjectType()
export class TicketTypeEnt extends TicketTypeCommon {
  approvers: UserEntAB[];
}


@InputType('TicketTypeInputType', { isAbstract: true })
@ObjectType()
export class TicketTypeEntInput extends TicketTypeCommon {
  approvers?: string[];
}

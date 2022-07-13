import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { CoreEntity, CoreEntityMg } from 'src/common/entities/core.entity';

@InputType('TicketTypeInputType', { isAbstract: true })
@ObjectType()
export class TicketTypeEnt extends CoreEntityMg {
  name: string;
  code: string;
}

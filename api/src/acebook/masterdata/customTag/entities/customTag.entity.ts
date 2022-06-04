import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { CoreEntity, CoreEntityMg } from 'src/common/entities/core.entity';

@InputType('CustomTagInputType', { isAbstract: true })
@ObjectType()
export class CustomTagEnt extends CoreEntityMg {
  name: string;
  description: string;
}

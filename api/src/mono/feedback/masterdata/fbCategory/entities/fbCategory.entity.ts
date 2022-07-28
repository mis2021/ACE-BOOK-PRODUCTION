import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { CoreEntity, CoreEntityMg } from 'src/common/entities/core.entity';

@InputType('FbCategoryInputType', { isAbstract: true })
@ObjectType()
export class FbCategoryEnt extends CoreEntityMg {
  name: string;
  description: string;
}

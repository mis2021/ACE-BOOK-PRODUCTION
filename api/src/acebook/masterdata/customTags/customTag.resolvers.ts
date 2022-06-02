import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
// import { PaginationArgs } from 'src/common/dto/pagination.args';
import { CustomTagService } from './customTag.service';
import {UpsertCustomTagInput,  } from './dto/customTag.input';
// import { DepartmentPaginator} from './dto/department.args';
import { CustomTagEnt } from './entities/customTag.entity';

// @Resolver(() => DepartmentEnt)
export class CustomTagResolver {
  constructor(private readonly customTagService: CustomTagService) {}

  @Mutation(() => CustomTagEnt)
  async upsertDepartment(
    @Args('input') upsertInput: UpsertCustomTagInput,
  ): Promise<CustomTagEnt> {

    return this.customTagService.upsert(upsertInput);
  }

  // @Mutation(() => DepartmentEnt)
  // async deleteDepartment(
  //   @Args('input') deleteInput: DepartmenId,
  // ): Promise<DepartmentEnt> {

  //   return this.departmentService.delete(deleteInput);
  // }

  // @Query(() => DepartmentPaginator, { name: 'departments' })
  // getTags(@Args() getArgs: PaginationArgs) {
  //   return this.departmentService.findAll(getArgs);
  // }

 

 
}

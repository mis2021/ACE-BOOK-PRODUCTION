import { Injectable } from '@nestjs/common';
import { paginate } from 'src/common/pagination/paginate';
import { CustomTagEnt } from './entities/customTag.entity';
import moment from 'moment';
// import  Department  from './entities/department.entity';
import CustomTags from '@models/Masterdata/CustomTags';

import { CustomTagId, UpsertCustomTagInput } from './dto/customTag.input';
import { PaginationArgs } from 'src/common/dto/pagination.args';

@Injectable()
export class CustomTagService {
  async upsert(upsertInput: UpsertCustomTagInput): Promise<CustomTagEnt> {
    let savedData;
    if (upsertInput._id) {
      savedData = await CustomTags.findOneAndUpdate(
        { _id: upsertInput._id },
        { $set: upsertInput },
        { new: true },
      );
    } else {
      savedData = new CustomTags({
        name: upsertInput.name,
        description: upsertInput.description,
      });
      await savedData.save();
    }

    return savedData;
  }

  // async delete(upsertInput: DepartmenId): Promise<DepartmentEnt> {
  //   let removedData = await Department.findOneAndDelete({
  //     _id: upsertInput._id,
  //   });

  //   return removedData;
  // }

  // async findAll({ page, first }: PaginationArgs) {
  //   const department: DepartmentEnt[] = await Department.find();
  //   return {
  //     data: department,
  //     paginatorInfo: paginate(
  //       department.length,
  //       page,
  //       first,
  //       department.length,
  //     ),
  //   };
  // }
}

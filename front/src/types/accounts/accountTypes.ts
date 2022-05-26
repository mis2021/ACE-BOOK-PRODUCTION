import { DepartmentGenType } from "../departments/departmentTypes";

export type AccFormValues = {
    username: string;
    firstName: string;
    middleName: string;
    suffix: string;
    lastName: string;
    position: string;
    isActive: boolean;
    isApprover: boolean;
    contact: string;
    email: string;
    password: string;
    confPassword: string |undefined;
    departmentOnDuty: DepartmentGenType;
    department: DepartmentGenType[];
  };

  export type AccFormSubmission = {
    username: string;
    firstName: string;
    middleName: string;
    suffix: string;
    lastName: string;
    position: string;
    isActive: boolean;
    isApprover: boolean;
    contact: string;
    email: string;
    password: string;
    confPassword: string | undefined;
    departmentOnDuty: string;
  };
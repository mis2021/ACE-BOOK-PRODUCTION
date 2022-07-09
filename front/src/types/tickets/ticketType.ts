import { AccFormValues } from "../accounts/accountTypes";

export type TicketFormValues = {
    _id?: string;
    username?: string;
    firstName?: string;
    middleName?: string;
    suffix?: string;
    lastName?: string;
    position?: string;
    createdBy?: string | object;
    requestedBy?: string;
    serviceDepartment?: string;
    requestingDepartment?: string;
    type?: string;
    status?: string;
    postOrigin?: string;
    
  };

export type TicketVarType = {
    name: string;
    code: string;
}

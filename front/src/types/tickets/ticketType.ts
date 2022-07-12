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
    type?: string | undefined;
    status?: string;
    postOrigin?: string;
    __typename? :string;

    
  };

export type TicketVarType = {
    name: string;
    code: string;
    color?: string;
    textColor?: string;
    class?: string;
}

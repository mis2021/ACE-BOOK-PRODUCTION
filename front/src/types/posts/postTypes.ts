

export type PostFormValues = {
  _id?: string;
  content: string;
  privacy?: string;
  attachments?: object[] | [] | undefined;
  created_at: string | null;
  createdBy?:any | null
  createdByDepartment?: string | null;
  taggedDepartments?: string[] | null;
  
};

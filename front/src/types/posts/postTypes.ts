

export type PostFormValues = {
  _id?: string;
  content: string;
  privacy?: string;
  attachments?: object[];
  created_at: string | null;
  createdBy?:any | null
};

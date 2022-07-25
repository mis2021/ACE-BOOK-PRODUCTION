import {gql, useMutation} from '@apollo/client';


export const UPSERT_FBCATEGORY = gql`
mutation UpsertFbCategory($input: UpsertFbCategoryInput!) {
  upsertFbCategory(input: $input) {
    _id
  }
}
`
import {gql, useMutation} from '@apollo/client';


export const UPSERT_FBCATEGORY = gql`
mutation UpsertFbCategory($input: UpsertFbCategoryInput!) {
  upsertFbCategory(input: $input) {
    _id
  }
}
`

export const UPSERT_FBQUESCATEGORY = gql`
mutation UpsertFbCategoryQuestion($input: UpsertFbCategoryQuestionInput!) {
  upsertFbCategoryQuestion(input: $input) {
    _id
  }
}
`
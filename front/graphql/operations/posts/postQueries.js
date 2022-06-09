import {gql, useQuery} from '@apollo/client';


export const GET_POSTS = gql`
query Data($first: Int, $page: Int) {
  posts(first: $first, page: $page) {
    data {
      _id
      created_at
      updated_at
      content
      privacy
      attachments {
        _id
        path
      }
      createdBy {
        _id
        firstName
        lastName
        departmentOnDuty {
          _id
          name
        }
      }
    }
    paginatorInfo {
      currentPage
      count
      perPage
      total
    }
  }
}
`

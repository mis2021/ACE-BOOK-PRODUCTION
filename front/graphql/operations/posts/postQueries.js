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
    }
  }
}
`

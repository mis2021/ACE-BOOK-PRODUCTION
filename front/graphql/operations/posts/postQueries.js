import {gql, useQuery} from '@apollo/client';


export const GET_POSTS = gql`
query Data($first: Int, $page: Int, $departmentId: String, $type: String) {
  posts(first: $first, page: $page, departmentId: $departmentId, type: $type) {
    data {
      _id
      created_at
      updated_at
      content
      privacy
      attachments {
        _id
        path
        type
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
      createdByDepartment{
        _id
        name
      }
      taggedDepartments {
        _id
        name
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

import {gql, useQuery} from '@apollo/client';


export const GET_ALL_ACCS = gql`
query Accounts($first: Int, $page: Int) {
  accounts(first: $first, page: $page) {
    data {
      _id
      username
      firstName
      middleName
      lastName
      departmentOnDuty {
        name
        _id
      }
      suffix
    }
    paginatorInfo {
      count
      currentPage
      firstItem
      lastItem
      lastPage
      perPage
      total
      hasMorePages
    }
  }
}
`
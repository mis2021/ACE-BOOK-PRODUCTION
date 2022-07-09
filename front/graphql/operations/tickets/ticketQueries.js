import {gql, useQuery} from '@apollo/client';

export const GET_ALL_TICKETS = gql`
query Data {
  tickets {
    data {
      _id
      created_at
      type
      description
      subject
      status
      code
      requestingDepartment {
        name
        _id
      }
    }
  }
}
`


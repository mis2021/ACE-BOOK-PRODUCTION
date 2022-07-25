import {gql, useQuery} from '@apollo/client';


export const GET_ALL_FBCATEGORY = gql`
query Data {
  fbCategorys {
    data {
      _id
      name
      description
    }
  }
}
`
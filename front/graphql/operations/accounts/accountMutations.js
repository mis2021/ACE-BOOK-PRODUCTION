import {gql, useMutation} from '@apollo/client';


export const UPSERT_ACCOUNT = gql`
mutation RegisterMU($input: RegisterInputMU!) {
  registerMU(input: $input) {
    user {
      _id
      firstName
      middleName
      lastName
      position
      departmentOnDuty {
        name
        _id
      }
      profilePicture
    }
    _id
    username
  }
}
`
// export const UPSERT_ACCOUNT = gql`
// mutation RegisterMU($input: RegisterInputMU!) {
//   register(input: $input) {
//     _id
//     username
//   }
// }
// `

// export const UPDATE_ACCOUNT = gql`
// mutation UpdateUser($input: RegisterInput!) {
//   updateUser(input: $input) {
//     _id
//     username
//   }
// }
// `
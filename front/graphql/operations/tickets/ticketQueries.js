import {gql, useQuery} from '@apollo/client';

export const GET_ALL_TICKETS = gql`
query Data($id: String) {
  tickets(_id: $id) {
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

export const GET_SPEC_TICKET = gql`
query Data($id: String) {
  tickets(_id: $id) {
    data {
      _id
      type
      description
      subject
      status
      code
      location
      postOrigin{
        _id
      }
      requestingDepartment {
        name
        _id
      }
      createdBy {
        _id
        firstName
        middleName
        lastName
      }
      requestedBy {
        _id
        firstName
        middleName
        lastName
      }
      dateRequested
      dateNeeded
      serviceDepartment {
        _id
        name
      }
    }
  }
}
`



export const GET_TICKET_TYPE = gql`
query Data {
  ticketTypes {
    data {
      _id
      name
      code
    }
  }
}
`


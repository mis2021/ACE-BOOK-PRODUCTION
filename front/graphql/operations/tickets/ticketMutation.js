import {gql, useMutation} from '@apollo/client';


export const UPSERT_TICKET = gql`
mutation UpsertTicket($input: UpsertTicketInput!) {
  upsertTicket(input: $input) {
    _id
    subject
    description
  }
}
`



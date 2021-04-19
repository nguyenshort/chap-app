import { gql } from 'apollo-boost'
// Post mutations
export const ME = gql`
  query me {
    me {
      id
      email
      name
      avatar
      about
    }
  }
`

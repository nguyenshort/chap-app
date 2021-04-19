import { gql } from 'apollo-boost'
// Post queries
export const GET_MY_ACCOUNT = gql`
  query getMyAccount {
    getMyAccount {
      id
      userName
      penName
      email
      avatar
      coin
      powerStone
      fastPass
      exp
      role
    }
  }
`

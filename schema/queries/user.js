import { gql } from 'apollo-boost'
// Post mutations
export const SIGN_UP = gql`
  mutation singup($email: String!, $password: String!) {
    signup(input: { email: $email, password: $password }) {
      token
    }
  }
`

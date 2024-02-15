import { gql } from "@apollo/client";

const GET_ALLUSERS = gql`
  #graphql
  query getAllUser {
    getAllUser {
      id
      name
      email
      age
    }
  }
`;

export { GET_ALLUSERS };

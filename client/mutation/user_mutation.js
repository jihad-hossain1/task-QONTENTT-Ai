import { gql } from "@apollo/client";

const ADD_USER = gql`
  #graphql
  mutation addUser($email: String!, $name: String!, $age: Int!) {
    addUser(email: $email, name: $name, age: $age) {
      id
      age
      email
      name
    }
  }
`;

export { ADD_USER };

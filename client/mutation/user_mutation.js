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

const UPDATE_USER = gql`
  #graphql
  mutation updateUser($id: ID!, $age: Int, $name: String) {
    updateUser(id: $id, name: $name, age: $age) {
      id
      name
      age
      email
    }
  }
`;
const DELETE_USER = gql`
  #graphql
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`;

export { ADD_USER, UPDATE_USER, DELETE_USER };

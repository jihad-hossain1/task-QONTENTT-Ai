import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { addUser, updateUser, deleteUser } from "../mutation/userMutation";
import { getAllUser } from "../query/userQuery";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUser,
  },
});

const RootMutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser,
    updateUser,
    deleteUser,
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});

export default schema;

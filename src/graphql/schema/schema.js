import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { addUser } from "../mutation/userMutation";
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
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});

export default schema;

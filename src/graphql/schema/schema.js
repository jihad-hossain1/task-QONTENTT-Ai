import { GraphQLObjectType, GraphQLSchema } from "graphql";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {},
});

const RootMutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {},
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});

export default schema;

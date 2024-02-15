import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "/api/v2/graphql_http",
  cache: new InMemoryCache(),
});

export default client;

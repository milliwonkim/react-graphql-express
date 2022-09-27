import ApolloClient, { InMemoryCache } from "apollo-boost";

const defaultOptions = {
  watchQuery: {
    fetchPolicy: "cache-and-network",
    errorPolicy: "ignore",
    notifyOnNetworkStatusChange: true,
  },
};

export default new ApolloClient({
  uri: "http://localhost:8080/graphql",
  cache: new InMemoryCache(),
  defaultOptions,
});

import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.zora.co/graphql',
  cache: new InMemoryCache(),
});

export default client;

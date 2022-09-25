import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret': 'secret',
    // authorization: localStorage.getItem('token') || ''
  },
});

export default client;

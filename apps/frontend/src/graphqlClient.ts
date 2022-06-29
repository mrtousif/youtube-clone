import { createClient, dedupExchange, fetchExchange, cacheExchange } from 'urql';

const client = createClient({
    url: 'https://api.spacex.land/graphql',
    suspense: true,
    exchanges: [
        dedupExchange,
        cacheExchange,
        // persistedFetchExchange({
        //   preferGetForPersistedQueries: true,
        // }),
        fetchExchange,
    ],
});

export default client;

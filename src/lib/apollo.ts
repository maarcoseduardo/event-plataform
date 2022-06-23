import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pk72431tkw01xt3kr59fbp/master',
    cache: new InMemoryCache()
})
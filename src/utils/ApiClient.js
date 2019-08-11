import { GraphQLClient } from 'graphql-request';

const ENDPOINT = 'https://staging-graphql-gateway.farmdrop.com/graphql';

export const ApiClient = new GraphQLClient(ENDPOINT, { headers: {} });

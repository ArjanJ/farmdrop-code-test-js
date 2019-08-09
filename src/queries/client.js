import { GraphQLClient } from 'graphql-request';

const ENDPOINT = 'https://staging-graphql-gateway.farmdrop.com/graphql';

export const client = new GraphQLClient(ENDPOINT, { headers: {} });

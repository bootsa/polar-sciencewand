import dotEnvExtended from 'dotenv-extended';
dotEnvExtended.load(); 

import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { WebSocketLink } from "apollo-link-ws";
import { split } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { getMainDefinition } from "apollo-utilities";
import * as ws from 'ws';
import fetch from 'node-fetch';

// console.log(process.env.GQL_BACKEND_WS)
// console.log(process.env.GQL_BACKEND_HTTP)

const headers = {'content-type': 'application/json'};
const getHeaders = () => {
  return headers;
};

const cache = new InMemoryCache();

const wsLink = new WebSocketLink({
  uri: process.env.GQL_BACKEND_WS,
  options: {
    reconnect: true,
    lazy: true,
    connectionParams: () => {
      return { headers: getHeaders() };
    },
  },
  webSocketImpl: ws,
});

const httpLink = new HttpLink({
  uri: process.env.GQL_BACKEND_HTTP,
  headers: getHeaders(),
  fetch
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

export const client = new ApolloClient({
  link,
  cache
});
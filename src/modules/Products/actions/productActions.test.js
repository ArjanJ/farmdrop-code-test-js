import { mockServer } from 'graphql-tools';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { getProducts } from './productActions';
import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
} from '../constants/ActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// Partial schema for productSearch query results.
const productSearchSchemaString = `
  type Node {
    name: String
    price: Price
  }

  type Price {
    pence: Int
  }

  type Nodes {
    nodes: [Node]
  }

  type Query {
    productSearch(query: String, first: Int): Nodes
  }
`;

// This is the list of nodes the test will expect.
const mockProductSuccessResponse = [{ name: 'Lamb', price: { pence: 100 } }];

// Mock graphql server.
const mockProductService = mockServer(
  productSearchSchemaString,
  {
    Query: () => ({
      productSearch: () => ({
        nodes: mockProductSuccessResponse,
      }),
    }),
  },
  false
);

// Query against the mock server using a query that is valid.
const productSearchQuerySuccess = `{
  productSearch(query: "Lamb Roasting Joints", first: 100) {
    nodes {
      name
      price {
        pence
      }
    }
  }
}`;

// 'age' doesn't exist in the schema so this fails.
const productSearchQueryFailure = `{
  productSearch(query: "Lamb Roasting Joints", first: 100) {
    nodes {
      age
    }
  }
}`;

describe('async actions', () => {
  let store;

  // This calls the mock graphql server with whatever query you pass it.
  const service = query => () => mockProductService.query(query);

  beforeEach(() => {
    store = mockStore({});
  });

  afterEach(() => {
    store.clearActions();
  });

  it('should create GET_PRODUCTS_SUCCESS when fetching products is done', async () => {
    const expectedActions = [
      { type: GET_PRODUCTS_REQUEST },
      {
        type: GET_PRODUCTS_SUCCESS,
        payload: mockProductSuccessResponse,
      },
    ];

    // Pass getProducts the mock service, otherwise the real API will be called.
    await store.dispatch(getProducts(service(productSearchQuerySuccess)));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  it('should create GET_PRODUCTS_FAILURE when fetching products fails', async () => {
    const expectedActions = [
      { type: GET_PRODUCTS_REQUEST },
      {
        type: GET_PRODUCTS_FAILURE,
        error: true,
      },
    ];

    // Pass getProducts the mock service, otherwise the real API will be called.
    await store.dispatch(getProducts(service(productSearchQueryFailure)));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });
});

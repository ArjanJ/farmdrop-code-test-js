import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';

import { rootReducer } from '../reducer/rootReducer';

const middlewareEnhancer = composeWithDevTools(applyMiddleware());

export const store = createStore(rootReducer, middlewareEnhancer);

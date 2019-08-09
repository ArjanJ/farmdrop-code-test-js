import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from '../reducer/rootReducer';

const middlewareEnhancer = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(rootReducer, middlewareEnhancer);

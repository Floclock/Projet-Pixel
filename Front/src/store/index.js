/**
 * Npm import
 */
import { createStore, compose, applyMiddleware } from 'redux';

/**
 * Local import
 */
import reducer from 'src/store/reducer';

import Middleware from 'src/store/Middleware/Middleware';
import LoginMiddleware from 'src/store/Middleware/LoginMiddleware';

/**
 * Store
 */

const appliedMiddleware = applyMiddleware(
  Middleware,
  LoginMiddleware,
)

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  appliedMiddleware,
);

const store = createStore(
  reducer,
  enhancers,
);
/* eslint-enable */

/**
 * Export
 */
export default store;
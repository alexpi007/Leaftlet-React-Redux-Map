import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { fromJS, Iterable } from 'immutable';

import { loadState, saveState } from './utils/storePersist';
import rootReducer from './reducer';

// Logger setted to convert ImmutableJS data
const logger = createLogger({
  stateTransformer: state => {
    const newState = {};
    const stateObj = state.toObject();
    for (const i of Object.keys(stateObj)) {
      if (Iterable.isIterable(stateObj[i])) {
        newState[i] = stateObj[i].toJS();
      } else {
        newState[i] = stateObj[i];
      }
    }
    return newState;
  }
});
// Loading persisted State from localStorage if it exists
const persistedState = fromJS(loadState());
const enhancers = [];
const middleware = [thunk, logger];

// Devtools extesion for dev environment
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(rootReducer, persistedState, composedEnhancers);

// Persisting the State in localStorage after Store changing
store.subscribe(() => {
  saveState(store.getState());
});

export default store;

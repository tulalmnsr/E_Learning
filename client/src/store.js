import { applyMiddleware, compose } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import { thunk } from 'redux-thunk'; // Import thunk without default

import rootReducer from './reducers';

// Initial state for store
const initialState = {};

// Any other middleware add here
const middleware = [thunk];

// 1st arg: reducer, 2nd arg: state, 3rd: enhancer
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;

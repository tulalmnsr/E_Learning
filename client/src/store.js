import { createStore, applyMiddleware, compose } from 'redux'; // Importing createStore, applyMiddleware, compose from redux
import { thunk } from 'redux-thunk'; // Importing 'thunk' as a named export from redux-thunk
import rootReducer from './reducers'; // Importing rootReducer from reducers file

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

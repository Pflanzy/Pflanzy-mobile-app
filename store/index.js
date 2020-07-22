import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './userReducer';

const store = createStore(
  userReducer,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

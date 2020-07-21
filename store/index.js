import { createStore, combineReducers } from 'redux';
import userReducer from './userReducer';
import plantsReducer from './plantsReducer';

const initialState = {
  user: null,
};

const store = createStore(
  combineReducers({ user: userReducer, plants: plantsReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

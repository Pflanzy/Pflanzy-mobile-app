import { createStore } from 'redux';
import rootReducer from './rootReducer';

const initialState = {
  user: null,
};

const store = createStore(rootReducer, initialState);

export default store;

import { createStore } from 'redux';
import rootReducer from './reducer';

const store = createStore(
  rootReducer,
  { user: {} },
  typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

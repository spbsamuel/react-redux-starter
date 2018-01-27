import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer';

function storeFactory(initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
  );
}

export default storeFactory
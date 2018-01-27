import {compose, createStore} from 'redux';
import rootReducer from './reducers/rootReducer';

function applyReduxDevTools(enhancers) {
  const devToolsExtension = window.devToolsExtension;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

function storeFactory(initialState = {}) {
  const enhancers = [];

  if (__DEV__) applyReduxDevTools(enhancers);

  return createStore(
    rootReducer,
    initialState,
    compose(
      ...enhancers
    )
  );
}

export default storeFactory
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

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      ...enhancers
    )
  );

  if (__DEV__){
    if (module.hot) {
      module.hot.accept('./reducers/rootReducer', () => {
        const rootReducer = require('./reducers/rootReducer');
        store.replaceReducer(rootReducer);
      });
    }
  }
  return store

}

export default storeFactory
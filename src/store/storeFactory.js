import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from './reducers/rootReducer';
import {routerMiddleware} from 'react-router-redux';

function applyReduxDevTools(enhancers) {
  const devToolsExtension = window.devToolsExtension;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

function storeFactory(initialState = {}, history) {
  const enhancers = [];
  const middleware = [routerMiddleware(history)];

  if (__DEV__) applyReduxDevTools(enhancers);

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
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
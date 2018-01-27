import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import 'styles/core.scss'
import storeFactory from './store/storeFactory'
import Routes from 'routes'

const initialState = {};
const history = createHistory();
const store = storeFactory(initialState);

function Root({store, history}) {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes/>
      </ConnectedRouter>
    </Provider>
  )
}

ReactDOM.render(
  <Root store={store} history={history}/>,
  document.getElementById('root')
);

if (__DEV__) {
  if (module.hot) {
    module.hot.accept();
  }
}
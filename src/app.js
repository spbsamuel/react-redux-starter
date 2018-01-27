import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import storeFactory from './store/storeFactory'
import ConnectedCounter from 'connected_components/Counter'
import './app.scss'

const initialState = {};
const store = storeFactory(initialState);

function Root({store}) {
  return (
    <Provider store={store}>
      <ConnectedCounter/>
    </Provider>
  )
}

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
);
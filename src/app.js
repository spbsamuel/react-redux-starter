import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {connect} from 'react-redux'

import './app.scss'
import storeFactory from './store/storeFactory'
import {incrementCount, decrementCount} from './store/reducers/counter/actions'

function mapStateToProps(state) {
  return ({
    count: state.counter.count
  })
}

function mapDispatchToProps(dispatch) {
  return ({
    increment: () => dispatch(incrementCount()),
    decrement: () => dispatch(decrementCount())
  })
}

function Counter({count, increment, decrement}) {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increase by 1</button>
      <button onClick={decrement}>Decrease by 1</button>
    </div>
  )
}

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

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
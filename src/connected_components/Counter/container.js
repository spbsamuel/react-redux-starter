import {connect} from 'react-redux'
import {incrementCount, decrementCount} from 'store/reducers/counter/actions'
import Counter from './Counter'

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

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
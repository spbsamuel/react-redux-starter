import {actions} from './actions'

const {
  INCREMENT_COUNT,
  DECREMENT_COUNT
} = actions;

const ACTION_HANDLERS = {
  [INCREMENT_COUNT]: (counter, action) => ({count: counter.count + 1}),
  [DECREMENT_COUNT]: (counter, action) => ({count: counter.count - 1}),
};

export const initialState = {
  count: 0
};

function counterReducer(counter = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(counter, action) : counter;
}


export default counterReducer

import React from 'react'

function Counter({count, increment, decrement}) {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increase by 1</button>
      <button onClick={decrement}>Decrease by 1</button>
    </div>
  )
}

export default Counter
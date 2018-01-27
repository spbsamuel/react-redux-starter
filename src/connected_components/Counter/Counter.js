import React from 'react'
import cls from './Counter.scss'

function Counter({count, increment, decrement}) {
  return (
    <div>
      <h1>{count}</h1>
      <button className={cls.CounterBtn} onClick={increment}>Increase by 1</button>
      <button className={cls.CounterBtn} onClick={decrement}>Decrease by 1</button>
    </div>
  )
}

export default Counter
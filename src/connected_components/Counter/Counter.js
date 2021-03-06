import React from 'react'
import cx from 'classnames'

import cls from './Counter.scss'
import reactLogo from './assets/React-icon.png'

function Counter({count, increment, decrement}) {
  const CountClass = cx(
    cls.Count,
    {
      [cls.Negative]: count < 0,
      [cls.Positive]: count > 0
    }
  );
  return (
    <div>
      <img src={reactLogo}/>
      <h1 className={CountClass}>
        {count}
      </h1>
      <button className={cls.CounterBtn} onClick={increment}>Increase by 1</button>
      <button className={cls.CounterBtn} onClick={decrement}>Decrease by 1</button>
    </div>
  )
}

export default Counter
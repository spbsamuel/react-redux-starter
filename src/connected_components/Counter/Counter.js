import React from 'react'
import cx from 'classnames'

import cls from './Counter.scss'
import reactLogo from './assets/React-icon.png'

function Counter({count, increment, decrement}) {
  const CountClass = cx(
    'secondary',
    {
      [cls.Negative]: count < 0,
      [cls.Positive]: count > 0
    }
  );
  return (
    <div className='text-center'>
      <img className='responsive' src={reactLogo}/>
      <h1 className={CountClass}>
        {count}
      </h1>
      <div className='row'>
        <button className={cx('col-xs-12 col-sm-6',cls.CounterBtn)} onClick={increment}>Increase by 1</button>
        <button className={cx('col-xs-12 col-sm-6',cls.CounterBtn)} onClick={decrement}>Decrease by 1</button>
      </div>
    </div>
  )
}

export default Counter
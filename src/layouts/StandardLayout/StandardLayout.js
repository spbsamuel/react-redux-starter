import React from 'react'
import cls from './StandardLayout.scss'
import cx from 'classnames'

function StandardLayout({children, className, ...props}) {
  return (
    <div {...props} className={cx(className, cls.StandardLayout)}>
      {children}
    </div>
  )
}

export default StandardLayout
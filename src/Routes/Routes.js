import React from 'react'
import {Route, Switch} from 'react-router-dom'

import StandardLayout from 'layouts/StandardLayout'
import Home from 'views/Home'

function Routes() {
  return (
    <StandardLayout>
      <Switch>
        <Route path='/' component={Home}/>
      </Switch>
    </StandardLayout>
  )
}

export default Routes
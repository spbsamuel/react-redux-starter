import React from 'react'

import {Route, Switch} from 'react-router-dom'

import Counter from 'connected_components/Counter'

function Routes() {
  return (
    <Switch>
      <Route path='/' component={Counter}/>
    </Switch>
  )
}

export default Routes
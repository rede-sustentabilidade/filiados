import React from 'react'
import { IndexRoute, Route } from 'react-router'

import App from './containers/App'
import { LoginPage } from './modules/Auth/containers'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LoginPage} />
    {/*<Route path="/login" component={LoginPage} />*/}
  </Route>
)

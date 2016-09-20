import React from 'react'
import { IndexRoute, Route } from 'react-router'

import App from './containers/App'
import { UserIsAuthenticated } from './modules/Auth'
import { LoginPage } from './modules/Auth/containers'
import { App as DashboardApp } from './modules/Dashboard/components'


export default (
  <Route path="/" component={App}>
    <IndexRoute component={DashboardApp} />
    <Route path="login" component={LoginPage} />
  </Route>
)

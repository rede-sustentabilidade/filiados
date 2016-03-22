import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import LoginPage from './containers/LoginPage.js';
import ListPage from './containers/ListPage.js';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LoginPage} />
    <Route path="list" component={ListPage}/>
    <Route path="*" component={NotFoundPage} />
  </Route>
);

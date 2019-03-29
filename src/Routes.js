import React from 'react';
import { Route, Redirect } from 'react-router'
import { HashRouter, Switch } from 'react-router-dom'
import Home from './pages/Home.js';
import Page1 from './pages/Page1.js';
import Page2 from './pages/Page2.js';

export default () => (
  <HashRouter>
    <div>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
      </Switch>
    </div>
  </HashRouter>
);

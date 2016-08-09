import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRouter, hashHistory } from 'react-router';
import App from './App/App';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
), document.getElementById('app'));

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRouter, hashHistory } from 'react-router';
import App from './App/App';
import Main from './Main/Main';
import Favorites from './Favorites/Favorites';
// import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/main" component={Main} />
      <Route path="/favorites" component={Favorites} />
    </Route>
  </Router>
), document.getElementById('app'));

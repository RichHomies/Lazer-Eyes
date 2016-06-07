import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Episodes from './components/Episodes';

export default (
  <Route component={App}>
    <Route path='/' component={Home} >
      <Route path='episodes/:episodeName' component={Episodes} />
    </Route>
  </Route>
);

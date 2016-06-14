import React from 'react';
import {match, Router} from 'react-router';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes';

let history = createBrowserHistory();
const { pathname, search, hash } = window.location;
const location = `${pathname}${search}${hash}`;

match({ routes, location },function(){
  ReactDOM.render(<Router history={history}>{routes}</Router>, document.getElementById('app'));
});

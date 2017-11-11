import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import ReduxPromise from 'redux-promise';
import { routes } from './routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <MuiThemeProvider>
        <Router history = {browserHistory} routes = { routes } />
    </MuiThemeProvider>
  </Provider>
  , document.querySelector('.container-fluid'));

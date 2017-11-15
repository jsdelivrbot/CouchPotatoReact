import "babel-polyfill"
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import createSagaMiddleware from 'redux-saga';
import { routes } from './routes';
import rootSaga from './sagas/root-saga';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(reducers, applyMiddleware(sagaMiddleware));
export const localStorage = window.localStorage;
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store= { store }>
    <MuiThemeProvider>
        <Router history = {browserHistory} routes = { routes } />
    </MuiThemeProvider>
  </Provider>
  , document.querySelector('.container-fluid'));

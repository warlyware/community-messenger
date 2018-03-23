import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'

import userReducer from './reducers/User';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {
  BrowserRouter as Router,
} from 'react-router-dom'

const reducer = combineReducers({
  user: userReducer
});

let store = createStore(reducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

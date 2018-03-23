import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

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

let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

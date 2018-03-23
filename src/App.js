import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import { connect } from 'react-redux';

import './styles/normalize.css';
import './styles/skeleton.css';
import './styles/base.css';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Help from './components/Help';
import Messages from './components/Messages';
import Subscribers from './components/Subscribers';

import './App.css';

const getUserName = user => {
  if (user.data) {
    debugger;
    return user.data.account.username;
  }
  return 'Not logged in';
}

const App = ({user}) => {
  return(
    <Router>
      <div className="container">
        <ul className="row">
          <li className="two columns"><NavLink to="/">Dashboard</NavLink></li>
          <li className="two columns"><NavLink to="/messages">Messages</NavLink></li>
          <li className="two columns"><NavLink to="/subscribers">Subscribers</NavLink></li>
          <li className="two columns"><NavLink to="/help">Help</NavLink></li>
          <li className="two columns">{getUserName(user)}</li>
        </ul>
        <hr/>
        <Route path="/login" component={Login}/>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/help" component={Help}/>
        <Route path="/messages" component={Messages}/>
        <Route path="/subscribers" component={Subscribers}/>
      </div>
    </Router>
  );
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(App);

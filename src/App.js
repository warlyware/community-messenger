import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { connect } from 'react-redux';

import { UserIsAuthenticated, UserIsNotAuthenticated } from './auth/auth.config';

import './styles/normalize.css';
import './styles/skeleton.css';
import './styles/base.css';

import Navigation from './components/Navigation';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Help from './components/Help';
import Messages from './components/Messages';
import Subscribers from './components/Subscribers';

import './App.css';

const App = ({user}) => {
  return(
    <Router>
      <div className="container">
        <Navigation user={user} />
        <hr/>
        <Route path="/login" component={UserIsNotAuthenticated(Login)}/>
        <Route exact path="/" component={UserIsAuthenticated(Dashboard)}/>
        <Route path="/help" component={UserIsAuthenticated(Help)}/>
        <Route path="/messages" component={UserIsAuthenticated(Messages)}/>
        <Route path="/subscribers" component={UserIsAuthenticated(Subscribers)}/>
      </div>
    </Router>
  );
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(App);

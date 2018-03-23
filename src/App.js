import React, { Component } from 'react'
import {
  Route,
  Link
} from 'react-router-dom'
import axios from 'axios';

import './styles/normalize.css';
import './styles/skeleton.css';
import './styles/base.css';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Help from './components/Help';
import Messages from './components/Messages';
import Subscribers from './components/Subscribers';
import CREDS from './creds';
import API from './api';

import './App.css';

class App extends Component {
  state = {
    user: {}
  }

  componentDidMount() {
    const token = window.btoa(window.unescape(window.encodeURIComponent(CREDS.string)));

    axios.get(API.find.me, {
      headers: {
        Authorization: `Basic ${token}`
      }
    }).then((user) => {
      this.setState({
        user
       });
    }).catch((err) => {
      console.error(err);
    });
  }

  render() {
    return (
      <div className="container">
        <ul className="row">
          <li className="two columns"><Link to="/">Dashboard</Link></li>
          <li className="two columns"><Link to="/messages">Messages</Link></li>
          <li className="two columns"><Link to="/subscribers">Subscribers</Link></li>
          <li className="two columns"><Link to="/help">Help</Link></li>
        </ul>
        <hr/>
        <Route path="/login" component={Login}/>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/help" component={Help}/>
        <Route path="/messages" component={Messages}/>
        <Route path="/subscribers" component={Subscribers}/>
      </div>
    );
  }
}

export default App;

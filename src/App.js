import React, { Component } from 'react'
import {
  Route,
  Link
} from 'react-router-dom'
import axios from 'axios';

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

    axios.get(API.findMe, {
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
      <div>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/messages">Messages</Link></li>
          <li><Link to="/subscribers">Subscribers</Link></li>
          <li><Link to="/help">Help</Link></li>
        </ul>
  
        <hr/>

        <Route exact path="/" component={Dashboard}/>
        <Route path="/help" component={Help}/>
        <Route path="/messages" component={Messages}/>
        <Route path="/subscribers" component={Subscribers}/>
      </div>
    );
  }
}

export default App;

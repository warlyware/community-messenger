import React from 'react'
import {
  Route,
  Link
} from 'react-router-dom'

import Dashboard from './components/Dashboard';
import Help from './components/Help';
import Messages from './components/Messages';
import Subscribers from './components/Subscribers';

import './App.css';

const App = () => (
    <div>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/messages">Messages</Link></li>
        <li><Link to="/subscribers">Subscribers</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Dashboard}/>
      <Route path="/help" component={Help}/>
      <Route path="/messages" component={Messages}/>
      <Route path="/subscribers" component={Subscribers}/>
    </div>
);

export default App;

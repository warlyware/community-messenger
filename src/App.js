import React from 'react'
import {
  Route,
  Redirect,
  Link
} from 'react-router-dom'

import './App.css';

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const SubscriberList = ({ match }) => (
  <div>
    <h3>{match.params.subscriberType}</h3>
  </div>
);

const MessageList = ({ match }) => (
  <div>
    <h3>{match.params.messageType}</h3>
  </div>
);

const Messages = ({ match }) => (
  <div>
    <h2>Messages</h2>
    <ul>
      <li>
        <Link to={`${match.url}/outgoing`}>
          Outgoing
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/incoming`}>
          Incoming
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:messageType`} component={MessageList}/>
    <Route exact path={match.url} render={() => (
      <Redirect from={match.url} to={`${match.url}/outgoing`} />
    )}/>
  </div>
);

const Subscribers = ({ match }) => (
  <div>
    <h2>Subscribers</h2>
    <ul>
      <li>
        <Link to={`${match.url}/residents`}>
          Residents
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/prospects`}>
          Prospects
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/inactive`}>
          Inactive
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:subscriberType`} component={SubscriberList}/>
    <Route exact path={match.path} render={() => (
      <Redirect from={match.path} to={`${match.path}/residents`} />
    )}/>
  </div>
);

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
      <Route path="/about" component={About}/>
      <Route path="/messages" component={Messages}/>
      <Route path="/subscribers" component={Subscribers}/>
    </div>
);

export default App;

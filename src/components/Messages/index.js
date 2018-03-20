import React from 'react';
import {
  Route,
  Redirect,
  Link
} from 'react-router-dom'

import MessageList from './MessageList';

const Messages = (route) => (
  <div>
    <h2>Messages</h2>
    <ul>
      <li>
        <Link to={`${route.match.url}/outgoing`}>
          Outgoing
        </Link>
      </li>
      <li>
        <Link to={`${route.match.url}/incoming`}>
          Incoming
        </Link>
      </li>
    </ul>

    <Route path={`${route.match.url}/:messageType`} component={MessageList}/>
    <Route exact path={route.match.url} render={() => (
      <Redirect from={route.match.url} to={`${route.match.url}/outgoing`} />
    )}/>
  </div>
);

export default Messages;

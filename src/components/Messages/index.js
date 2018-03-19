import React from 'react';
import {
  Route,
  Redirect,
  Link
} from 'react-router-dom'

import MessageList from './MessageList';

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

export default Messages;

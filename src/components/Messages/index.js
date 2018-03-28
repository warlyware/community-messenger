import React from 'react';
import {
  Route,
  Redirect,
  Link
} from 'react-router-dom'

import MessageList from './MessageList';

const Messages = (props) => (
  <div className="container">
    <ul className="row list-style-none">
      <li className="two columns">
        <Link to={`${props.match.url}/outgoing`}>
          Outgoing
        </Link>
      </li>
      <li className="two columns">
        <Link to={`${props.match.url}/incoming`}>
          Incoming
        </Link>
      </li>
    </ul>

    <Route path={`${props.match.url}/:messageType`} component={MessageList}/>
    <Route exact path={props.match.url} render={() => (
      <Redirect from={props.match.url} to={`${props.match.url}/outgoing`} />
    )}/>
  </div>
);

export default Messages;

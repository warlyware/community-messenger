import React from 'react';
import {
  Route,
  Redirect,
  Link
} from 'react-router-dom'

import SubscriberList from './SubscriberList';

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

export default Subscribers;

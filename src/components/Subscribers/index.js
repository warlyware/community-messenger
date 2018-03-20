import React from 'react';
import {
  Route,
  Redirect,
  Link
} from 'react-router-dom'

import SubscriberList from './SubscriberList';

const Subscribers = (route) => (
  <div>
    <h2>Subscribers</h2>
    <ul>
      <li>
        <Link to={`${route.match.url}/residents`}>
          Residents
        </Link>
      </li>
      <li>
        <Link to={`${route.match.url}/prospects`}>
          Prospects
        </Link>
      </li>
      <li>
        <Link to={`${route.match.url}/inactive`}>
          Inactive
        </Link>
      </li>
    </ul>

    <Route path={`${route.match.url}/:subscriberType`} component={SubscriberList}/>
    <Route exact path={route.match.url} render={() => (
      <Redirect from={route.match.url} to={`${route.match.url}/residents`} />
    )}/>
  </div>
);

export default Subscribers;

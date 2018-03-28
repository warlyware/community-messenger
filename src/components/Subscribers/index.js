import React from 'react';
import {
  Route,
  Redirect,
  Link
} from 'react-router-dom'

import SubscriberList from './SubscriberList';

const Subscribers = (props) => (
  <div className="container">
    <ul className="row list-style-none">
      <li className="two columns">
        <Link to={`${props.match.url}/residents`}>
          Residents
        </Link>
      </li>
      <li className="two columns">
        <Link to={`${props.match.url}/prospects`}>
          Prospects
        </Link>
      </li>
      <li className="two columns">
        <Link to={`${props.match.url}/inactive`}>
          Inactive
        </Link>
      </li>
    </ul>

    <Route path={`${props.match.url}/:subscriberType`} component={SubscriberList}/>
    <Route exact path={props.match.url} render={() => (
      <Redirect from={props.match.url} to={`${props.match.url}/residents`} />
    )}/>
  </div>
);

export default Subscribers;

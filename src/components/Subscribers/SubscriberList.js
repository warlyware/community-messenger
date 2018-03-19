import React from 'react';

const SubscriberList = ({ match }) => (
  <div>
    <h3>{match.params.subscriberType}</h3>
  </div>
);

export default SubscriberList;

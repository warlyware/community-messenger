import React from 'react';

const SubscriberList = (route) => (
  <h3>{route.match.params.subscriberType}</h3>
);

export default SubscriberList;

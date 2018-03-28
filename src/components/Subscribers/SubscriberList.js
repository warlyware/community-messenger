import React from 'react';

const SubscriberList = (props) => (
  <h3>{props.match.params.subscriberType}</h3>
);

export default SubscriberList;

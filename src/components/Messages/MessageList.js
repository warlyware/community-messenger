import React from 'react';

const MessageList = (route) => (
  <h3>{route.match.params.messageType}</h3>
);

export default MessageList;

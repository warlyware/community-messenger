import React from 'react';

const MessageList = ({ match }) => (
  <div>
    <h3>{match.params.messageType}</h3>
  </div>
);

export default MessageList;

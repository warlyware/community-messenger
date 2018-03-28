import React from 'react';

const MessageList = (props) => (
  <h3>{props.match.params.messageType}</h3>
);

export default MessageList;

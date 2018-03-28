import React from 'react';
import IncomingMessageList from './IncomingMessageList';
import OutgoingMessageList from './OutgoingMessageList';

const MessageList = (props) => (
  <div>
    <h3>{props.match.params.messageType}</h3>
    {props.match.params.messageType === 'incoming' ? <IncomingMessageList /> : null}
    {props.match.params.messageType === 'outgoing' ? <OutgoingMessageList /> : null}
  </div>
);

export default MessageList;

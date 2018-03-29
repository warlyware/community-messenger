import React from 'react';

const MessageDetails = (props) => {
  return(
    <div>
      <h4>{props.message.title}</h4>
      <button onClick={() => props.deleteMessage(props.message.id)}></button>
    </div>
  );
}

export default MessageDetails;

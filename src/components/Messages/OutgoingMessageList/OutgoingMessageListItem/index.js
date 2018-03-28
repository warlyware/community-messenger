import React from 'react';
import * as moment from 'moment';

const OutgoingMessageListItem = (props) => {
  return(
    <tr>
      <td>{moment(props.message.sent).format('LLL')}</td>
      <td>{props.message.title}</td>
      <td>{props.message.status}</td>
    </tr>
  );
}

export default OutgoingMessageListItem;

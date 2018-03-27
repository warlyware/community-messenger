import React, { Component } from 'react';
import * as moment from 'moment';

const actionTypes = {
  SUBSCRIBE: 'SUBSCRIBE',
  MESSAGE_INCOMING: 'MESSAGE_INCOMING',
  UNSUBSCRIBE: 'UNSUBSCRIBE'
}

export default class NotificationListItem extends Component {
  formatActionType(actionType) {
    switch(actionType) {
      case actionTypes.SUBSCRIBE:
        return 'subscribed';
      case actionTypes.MESSAGE_INCOMING:
        return 'replied';
      case actionTypes.UNSUBSCRIBE:
        return 'unsubscribed';
      default:
        return '';
    }
  }

  render() {
    const name = this.props.notification.details.firstName || this.props.notification.details.sender.firstName;
    const type = this.formatActionType(this.props.notification.type);

    return (
      <div className="row">
        <h6 className="twelve columns margin-bottom-0 bold">
          {name} has {type}.
        </h6>
        <div className="twelve columns">
          {moment(this.props.notification.time).format('LLL')}
        </div>
      </div>
    );
  }
}

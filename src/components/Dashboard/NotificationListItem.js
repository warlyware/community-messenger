import React, { Component } from 'react';

export default class NotificationListItem extends Component {
  render() {
    return (
      <div className="row">
        <h5 className="twelve columns margin-bottom-0">
          {this.props.notification.details.firstName || this.props.notification.details.sender.firstName} has {this.props.notification.type}
        </h5>
        <div className="twelve columns">
          {this.props.notification.time}
        </div>
      </div>
    );
  }
}

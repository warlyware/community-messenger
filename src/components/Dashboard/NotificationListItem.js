import React, { Component } from 'react';

export default class NotificationListItem extends Component {
  render() {
    return (
      <div className="row">
        <h5 className="twelve columns margin-bottom-0">
          {this.props.notification.name} has {this.props.notification.action}
        </h5>
        <div className="twelve columns">
          {this.props.notification.time}
        </div>
      </div>
    );
  }
}

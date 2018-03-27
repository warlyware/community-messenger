import React, { Component } from 'react';
import { connect } from 'react-redux';

import NotificationListItem from './NotificationListItem'
import { getNotifications } from '../../../actions/notifications';

class NotificationList extends Component {
  static defaultProps = {
    notifications: []
  }

  componentDidMount() {
    this.props.getNotifications();
  }

  render() {
    return (
      <div className="six columns border padding-8">
        <h3>Notifications</h3>
        {this.props.notifications.map((notification) => {
          return <NotificationListItem
            key={notification.id}
            notification={notification}
          />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    notifications: state.notifications
  }
}

export default connect(mapStateToProps, {
  getNotifications: getNotifications
})(NotificationList);

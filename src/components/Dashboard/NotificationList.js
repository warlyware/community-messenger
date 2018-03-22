import React, { Component } from 'react';
import axios from 'axios';

import NotificationListItem from './NotificationListItem'
import API from '../../api';

const fakeNotifications = [
  {
    "name": "Bob Labla",
    "action": "replied",
    "time": "a day ago",
    "id": 0
  },
  {
    "name": "John Hancock",
    "action": "subscribed",
    "time": "2 days ago",
    "id": 1
  },
  {
    "name": "Herbie Hancock",
    "action": "replied",
    "time": "5 days ago",
    "id": 2
  },
  {
    "name": "Jon Snow",
    "action": "replied",
    "time": "10 days ago",
    "id": 3
  },
  {
    "name": "Bilbo Baggins",
    "action": "subscribed",
    "time": "13 days ago",
    "id": 4
  },
];

export default class NotificationList extends Component {
  state = {
    notifications: []
  }

  // componentWillMount() {
  //   axios.get(API.find.relatedToMyProperty, {
  //     params: {
  //       types: 'MESSAGE_INCOMING,SUBSCRIBE,UNSUBSCRIBE'
  //     }
  //   }).then((notifications) => {
  //     console.log(notifications);
  //     this.setState({ notifications })
  //   }).catch((error) => {
  //     console.error(error);
  //   });
  // }

  render() {
    return (
      <div className="six columns border padding-8">
        <h3>Notifications</h3>
        {fakeNotifications.map((notification) => {
          return <NotificationListItem
            key={notification.id}
            notification={notification}
          />;
        })}
      </div>
    );
  }
}

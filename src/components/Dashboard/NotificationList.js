import React from 'react';

import NotificationListItem from './NotificationListItem'

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

const NotificationList = (route) => (
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

export default NotificationList;

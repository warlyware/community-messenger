import React from 'react';

import DashboardNotificationListItem from './DashboardNotificationListItem'

const fakeNotifications = [
  {
    "name": "Bob Labla",
    "action": "replied",
    "time": "a day ago"
  },
  {
    "name": "John Hancock",
    "action": "subscribed",
    "time": "2 days ago"
  },
  {
    "name": "Herbie Hancock",
    "action": "replied",
    "time": "5 days ago"
  },
  {
    "name": "Jon Snow",
    "action": "replied",
    "time": "10 days ago"
  },
  {
    "name": "Bilbo Baggins",
    "action": "subscribed",
    "time": "13 days ago"
  },
]

const DashboardNotificationList = (route) => (
  <div className="six columns border padding-8">
    <h3>Notifications</h3>
    {fakeNotifications.map((notification) => {
      return <DashboardNotificationListItem notification={notification} />;
    })}
  </div>
);

export default DashboardNotificationList;

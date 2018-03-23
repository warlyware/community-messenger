import React from 'react';

import { userIsAuthenticated } from '../../auth/auth.config';
import NotificationList from './NotificationList';
import MessageList from './MessageList';

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
    <div className="row">
      <NotificationList />
      <MessageList />
    </div>
  </div>
);

export default userIsAuthenticated(Dashboard);

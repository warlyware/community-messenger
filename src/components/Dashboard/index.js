import React from 'react';

import DashboardNotificationList from './DashboardNotificationList';
import DashboardMessageList from './DashboardMessageList';

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
    <DashboardNotificationList />
    <DashboardMessageList />
  </div>
);

export default Dashboard;

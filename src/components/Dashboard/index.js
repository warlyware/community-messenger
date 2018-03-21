import React from 'react';

import DashboardNotificationList from './DashboardNotificationList';
import DashboardMessageList from './DashboardMessageList';

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
    <div className="row">
      <DashboardNotificationList />
      <DashboardMessageList />
    </div>
  </div>
);

export default Dashboard;

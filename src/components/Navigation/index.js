import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


const getUserName = user => {
  if (user.data) {
    return user.data.account.username;
  }
  return 'Not logged in';
}

export default class Navigation extends Component {
  static defaultProps = {
    user: {}
  }

  render() {
    return (
      <ul className="row">
        <li className="two columns"><NavLink to="/">Dashboard</NavLink></li>
        <li className="two columns"><NavLink to="/messages">Messages</NavLink></li>
        <li className="two columns"><NavLink to="/subscribers">Subscribers</NavLink></li>
        <li className="two columns"><NavLink to="/help">Help</NavLink></li>
        <li className="two columns">{getUserName(this.props.user)}</li>
      </ul>
    );
  }
}

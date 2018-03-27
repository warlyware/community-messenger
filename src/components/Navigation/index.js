import React, { Component, Link } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
  static defaultProps = {
    user: {}
  }

  getUserName = () => {
    if (this.props.user.data) {
      return this.props.user.data.account.username;
    }
    return 'Not logged in';
  }

  render() {
    return (
      <ul className="row">
        <li className="two columns"><NavLink to="/">Dashboard</NavLink></li>
        <li className="two columns"><NavLink to="/messages">Messages</NavLink></li>
        <li className="two columns"><NavLink to="/subscribers">Subscribers</NavLink></li>
        <li className="two columns"><NavLink to="/help">Help</NavLink></li>
        <li className="two columns"><Link onClick={this.logout}>Logout</Link></li>
        <li className="two columns">{this.getUserName()}</li>
      </ul>
    );
  }
}

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../../actions/user';

class Navigation extends Component {
  static defaultProps = {
    user: {}
  }

  getUserName = () => {
    if (this.props.user.data) {
      return this.props.user.data.account.username;
    }
    return 'Not logged in';
  }

  logout = () => {
    this.props.logout();
  }

  render() {
    return (
      <ul className="row">
        <li className="two columns"><NavLink to="/">Dashboard</NavLink></li>
        <li className="two columns"><NavLink to="/messages">Messages</NavLink></li>
        <li className="two columns"><NavLink to="/subscribers">Subscribers</NavLink></li>
        <li className="two columns"><NavLink to="/help">Help</NavLink></li>
        <li className="two columns"><a href="#" onClick={this.logout}>Logout</a></li>
        <li className="two columns">{this.getUserName()}</li>
      </ul>
    );
  }
}

export default connect(null, {
  logout: logout
})(Navigation);

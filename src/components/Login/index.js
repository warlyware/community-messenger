import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/user';

class Login extends Component {
  static defaultProps = {
    login: () => {}
  }

  handleLogin = (event) => {
    event.preventDefault();
    this.props.login({
      name: this.refs.name.value,
      password: this.refs.password.value
    });
  }

  render() {
    return(
      <div>
        <h2>Login</h2>
        <input type="text" ref="name" />
        <input type="password" ref="password" />
        <br/>
        <button onClick={this.handleLogin}>Submit</button>
      </div>
    );
  }
}

export default connect(null, { login })(Login);

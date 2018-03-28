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
      <form onSubmit={this.handleLogin}>
        <h2>Login</h2>
        <input type="text" ref="name" />
        <input type="password" ref="password" />
        <br/>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: (data) => dispatch(login(data))
  }
}

export default connect(null, mapDispatchToProps)(Login);

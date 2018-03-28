import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as moment from 'moment';

import { getMessages } from '../../../actions/messages';

class OutgoingMessageList extends Component {
  componentDidMount() {
    this.props.getMessages()
  }

  render() {
    return(
      <table>
        <thead>
          <tr>
            <th>Sent</th>
            <th>Message</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {console.log(this.props.messages)}
          {this.props.messages.map((message) => {
            return(
              <tr>
                {console.log(message.sent)}
                <td>{moment(message.sent).format('LLL')}</td>
                <td>{message.title}</td>
                <td>{message.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getMessages: () => dispatch(getMessages())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OutgoingMessageList);

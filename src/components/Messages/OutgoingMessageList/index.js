import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMessages } from '../../../actions/messages';
import OutgoingMessageListItem from './OutgoingMessageListItem';

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
          {this.props.messages.map((message) => {
            return <OutgoingMessageListItem message={message} />
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

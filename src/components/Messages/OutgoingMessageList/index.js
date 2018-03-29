import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import { getMessages, deleteMessage } from '../../../actions/messages';
import OutgoingMessageListItem from './OutgoingMessageListItem';
import MessageDetails from '../MessageDetails';

Modal.setAppElement('#root');

class OutgoingMessageList extends Component {
  state = {
    selectedMessage: null
  }

  selectMessage = (message) => {
    this.setState({
      selectedMessage: message
    });
  }

  unselectMessage = () => {
    this.setState({
      selectedMessage: null
    });
  }

  deleteMessage = (message) => {
    console.log(`delete ${message}`);
    this.props.deleteMessage(message);
    this.unselectMessage();
  }

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
            return <OutgoingMessageListItem
              key={message.id}
              message={message}
              onSelect={this.selectMessage}
              deleteMessage={this.deleteMessage}
            />
          })}
        </tbody>
        <Modal
          isOpen={this.state.selectedMessage ? true : false}
          onRequestClose={this.unselectMessage}
        >
          <MessageDetails
            message={this.state.selectedMessage}
            deleteMessage={this.deleteMessage}
          />
        </Modal>
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
    getMessages: () => dispatch(getMessages()),
    deleteMessage: (message) => dispatch(deleteMessage(message, 'broadcasts'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OutgoingMessageList);

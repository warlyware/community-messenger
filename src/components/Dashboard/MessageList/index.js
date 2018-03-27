import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMessages } from '../../../actions/messages';
import MessageListItem from './MessageListItem';

class MessageList extends Component {
  static defaultProps = {
    messages: []
  }

  componentDidMount() {
    this.props.getMessages();
  }

  render() {
    return (
      <div className="six columns border padding-8">
        <h3>Messages</h3>
        {this.props.messages.map((message) => {
          return <MessageListItem
            key={message.id}
            message={message}
          />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps, {
  getMessages: getMessages
})(MessageList);

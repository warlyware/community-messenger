import React, { Component } from 'react';
import * as moment from 'moment';

export default class MessageListItem extends Component {
  render() {
    return (
      <div className="row">
        {console.log(this.props.message)}
        <h6 className="twelve columns margin-bottom-0 bold row">
          <div className="nine columns">
            {this.props.message.title}
          </div>
          <div className="three columns">
            {moment(this.props.message.sent).format('LT')}
          </div>
        </h6>
        <div className="twelve columns">
          {this.props.message.text}
        </div>
      </div>
    );
  }
}

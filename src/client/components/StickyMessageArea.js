import React, { Component, PropTypes } from 'react';

import './StickyMessageArea.less';

class StickyMessageArea extends Component {
  handleSend() {
    const input = this.refs.messageInput.getDOMNode();
    const content = input.value.trim();
    if (content.length > 0) {
		  this.props.newMessage(content);
		  input.value = '';
    }
  }

  render() {
    return (
      <div className="SC-MessageArea ui form">
        <div className="SC-MessageArea-TextBox field">
          <textarea rows="2" ref="messageInput" className="SC-MessageArea-Text"></textarea>
        </div>
        <span
          className="SC-MessageArea-IconArea"
          onClick={ this.handleSend.bind(this) }
        >
          <i className="SC-MessageArea-IconArea-Icon big reply icon"></i>
        </span>
      </div>
    );
  }
}

export default StickyMessageArea;

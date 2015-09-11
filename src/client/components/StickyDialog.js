import React, { Component, PropTypes } from 'react';

import './StickyDialog.less';

class StickyDialog extends Component {
  render() {
    const msgs = this.props.messages.map(function(message) {
      return (
        <div className="item">
          <div className="header">
            { message.author }
          </div>
          { message.content }
        </div>
      );
    });
    return (
      <div className="SC-Dialog">
        <div className="ui list">
          { msgs }
        </div>
      </div>
    );
  }
}

export default StickyDialog;

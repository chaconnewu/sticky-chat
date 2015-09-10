import React, { Component, PropTypes } from 'react';

import './StickyMessageArea.less';

class StickyMessageArea extends Component {
  render() {
    return (
      <div className="SC-MessageArea ui form">
        <div className="SC-MessageArea-TextBox field">
          <textarea rows="2" className="SC-MessageArea-Text"></textarea>
        </div>
        <span className="SC-MessageArea-IconArea">
          <i className="SC-MessageArea-IconArea-Icon big reply icon"></i>
        </span>
      </div>
    );
  }
}

export default StickyMessageArea;

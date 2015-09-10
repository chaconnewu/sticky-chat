import React, { Component, PropTypes } from 'react';
import StickyDialog from './StickyDialog';
import StickyMessageArea from './StickyMessageArea';
import './StickyChatWindow.less';

class StickyChatWindow extends Component {
  render() {
    return (
      <div className="SC-Window">
        <StickyDialog />
        <StickyMessageArea />
      </div>
    );
  }
}

export default StickyChatWindow;

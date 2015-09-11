import React, { Component, PropTypes } from 'react';
import StickyDialog from './StickyDialog';
import StickyMessageArea from './StickyMessageArea';
import './StickyChatWindow.less';

class StickyChatWindow extends Component {
  render() {
    return (
      <div className="SC-Window">
        <StickyDialog messages={ this.props.messages } />
        <StickyMessageArea newMessage={ this.props.newMessage }/>
      </div>
    );
  }
}

export default StickyChatWindow;

import React, { Component, PropTypes } from 'react';
import StickyDialog from './StickyDialog';
import StickyMessageArea from './StickyMessageArea';
import './StickyChatWindow.less';

class StickyChatWindow extends Component {
  render() {
    console.log(this.props.addMessage);
    return (
      <div className="SC-Window">
        <StickyDialog />
        <StickyMessageArea addMessage={ this.props.addMessage }/>
      </div>
    );
  }
}

export default StickyChatWindow;

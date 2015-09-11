import React, { Component, PropTypes } from 'react';
import StickyDialog from './StickyDialog';
import StickyMessageArea from './StickyMessageArea';
import './StickyChatWindow.less';

class StickyChatWindow extends Component {
  render() {
    console.log(this.props.messages);
    return (
      <div className="SC-Window">
        <StickyDialog messages={ this.props.messages } />
        <StickyMessageArea addMessage={ this.props.addMessage }/>
      </div>
    );
  }
}

export default StickyChatWindow;

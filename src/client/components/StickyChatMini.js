import React, { Component, PropTypes } from 'react';
import StickyChatWindow from './StickyChatWindow.js';

import './StickyChatMini.less';

class StickyChatMini extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    };
  }

  render() {
    return(
      <div>
        { this.state.isOpen ?
          <StickyChatWindow
            newMessage={ this.props.actions.newMessage }
            messages={ this.props.messages.messages }
          /> : null }
        <div className="SC-Restricted">
          <div className="ui inverted menu">
            <a
              className="active item"
              onClick={ () => this.setState({ isOpen: !this.state.isOpen }) }
            >
              { this.state.isOpen ? 'Close' : 'Open' }
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default StickyChatMini;

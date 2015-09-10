import React, { Component, PropTypes } from 'react';
import './StickyChat.less';

class StickyChat extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="SC-Box">
        <h1 className='ui header'>StickyChat</h1>
      </div>
    );
  }
}

export default StickyChat;

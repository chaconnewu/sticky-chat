import React, { Component, PropTypes } from 'react';

import './StickyDialog.less';

class StickyDialog extends Component {
  componentWillUpdate() {
    let node = React.findDOMNode(this.refs.scroller);
    this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight;
  }

  componentDidUpdate() {
    if (this.shouldScrollBottom) {
      let node = React.findDOMNode(this.refs.scroller);
      node.scrollTop = node.scrollHeight;
    }
  }

  render() {
    const msgs = this.props.messages.map(function(message, index) {
      return (
        <div className="item" key={ index }>

          <div className="SC-Dialog-MessageHeader header">
            { message.author }
          </div>
          <span className="SC-Dialog-Timestamp">
            { message.time }
          </span>


          <div className="SC-Dialog-Message">
            { message.content }
          </div>
        </div>
      );
    });
    return (
      <div className="SC-Dialog">
        <div ref="scroller" className="SC-Dialog-Scroller ui list">
          { msgs }
        </div>
      </div>
    );
  }
}

export default StickyDialog;

import React, { Component, PropTypes } from 'react';
import StickyChatMini from './components/StickyChatMini';
import { bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';

import * as Actions from './actions/messages';

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

class App extends Component {
  render() {
    const { messages, dispatch } = this.props;
    const actions = bindActionCreators(Actions, dispatch);
    return (
      <StickyChatMini
        actions={ actions }
        messages={ messages }
      />
    )
  }
}

export default connect(mapStateToProps)(App);

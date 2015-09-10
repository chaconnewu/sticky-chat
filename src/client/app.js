import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import StickyChat from './components/StickyChat';

const store = configureStore();


class App extends Component {
  render() {
    return (
      <StickyChat />
    )
  }
}

class ProviderWrapper extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <App />}
      </Provider>
    );
  }
}

React.render(
  <ProviderWrapper />,
  document.getElementById('app')
);

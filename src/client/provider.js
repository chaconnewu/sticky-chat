import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import App from './app';

const store = configureStore();


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

import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import { addMessage } from './actions/messages';
import App from './app';
import { socket } from './constants/AppConfig';

const store = configureStore();

socket.on('new message', function(message) {
	store.dispatch(addMessage(message));
});

React.render(
    <Provider store={store}>
      {() => <App />}
    </Provider>,
  document.getElementById('app')
);

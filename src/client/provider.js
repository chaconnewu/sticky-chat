import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import io from 'socket.io-client';
import { addMessage } from './actions/messages';
import App from './app';

const store = configureStore();
export const socket = io('http://localhost:3000');

socket.on('new message', function(message) {
	store.dispatch(addMessage(message));
});

export default class ProviderWrapper extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <App />}
      </Provider>
    );
  }
}

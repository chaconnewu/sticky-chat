import * as types from '../constants/ActionTypes';
import moment from 'moment';
import { socket } from '../provider';

export function addMessage(message) {
  return { type: types.ADD_MESSAGE, message };
}

export function newMessage(message) {
  const time = moment().format('YYY-MM-DD HH:mm:ss');
  const author = 'Yu Wu'
  socket.emit('new message', { author, time, content: message });
  return { type: types.NEW_MESSAGE };
}

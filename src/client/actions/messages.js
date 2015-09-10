import * as types from '../constants/ActionTypes';

export function sendMessage() {
  return { type: types.SEND_MESSAGE };
}

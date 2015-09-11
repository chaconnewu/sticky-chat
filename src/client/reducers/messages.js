import { ADD_MESSAGE } from '../constants/ActionTypes';

const initalState = {
  channel: '',
  messages: []
};

export default function messages(state = initalState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return Object.assign({}, state, {
        messages: [...state.messages, action.message]
      });
    default:
      return state;
  }
}

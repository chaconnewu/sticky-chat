import { ADD_MESSAGE } from '../constants/ActionTypes';

const initalState = {
  channel: '',
  messages: []
};

export default function messages(state = initalState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      console.log(state);
      return Object.assign({}, state, {
        messages: [...state, action.message]
      });
    default:
      return state;
  }
}

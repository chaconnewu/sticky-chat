import { ADD_MESSAGE } from '../constants/ActionTypes';
import moment from 'moment';

const initalState = {
  channel: '',
  messages: []
};

export default function messages(state = initalState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      console.log(state);
      return Object.assign({}, state, {
        messages: [...state.messages, {
          author: 'Yu Wu',
          content: action.message,
          time: moment().format('YYYY-MM-DD HH:mm:ss')
        }]
      });
    default:
      return state;
  }
}

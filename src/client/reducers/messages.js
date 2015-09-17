import { ADD_MESSAGE } from '../constants/ActionTypes';
import * as _ from 'lodash';

const initalState = {
  channel: '',
  messages: []
};

export default function messages(state = initalState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      var stateCopy = _.cloneDeep(state);
      stateCopy.messages = [...stateCopy.messages, action.message];
      return stateCopy;
    default:
      return state;
  }
}

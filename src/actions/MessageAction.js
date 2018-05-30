import {LOAD_MESSAGES} from './ActionTypes';

export const loadMessages = () => {
  return {
    type: LOAD_MESSAGES,
    payload: {
      messages: ['Boilerplate', 'Web ReactJS']
    }
  }
}

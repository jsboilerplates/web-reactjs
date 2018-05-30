import {LOAD_MESSAGES} from '../actions/ActionTypes'

export default (state = {
  messages: []
}, action) => {
  switch (action.type) {
    case LOAD_MESSAGES:
      return {...state,
        messages: action.payload.messages
      }
    default:
      return state
  }
}

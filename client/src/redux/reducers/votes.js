import { types } from '../actions/types'
const { ADD_USER_TO_LIST, UPDATE_ALL_VOTES, RESET_VOTES, GET_ALL_USERS } = types

const initialState = []

function votesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER_TO_LIST:
    case UPDATE_ALL_VOTES:
    case RESET_VOTES:
    case GET_ALL_USERS:
      return [...action.payload]
    default:
      return state
  }
}

export default votesReducer

import { types } from '../actions/types'
const { ADD_USER, ENTER_ROOM, UPDATE_USER_VOTES, RESET_USER_VOTES } = types

const initialState = {
  name: null,
  id: null,
  room: null,
  votes: [
    { category: 'Uncertainty', value: 'N/A', id: null },
    { category: 'Complexity', value: 'N/A', id: null },
    { category: 'Effort', value: 'N/A', id: null },
  ],
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        name: action.payload.name,
        id: action.payload.id,
        room: action.payload.room,
        votes: action.payload.votes,
      }
    case UPDATE_USER_VOTES:
      return {
        ...state,
        votes: [...action.payload],
      }
    case ENTER_ROOM:
      return {
        ...state,
        room: action.payload,
      }
    case RESET_USER_VOTES:
      return {
        ...state,
        votes: [
          { category: 'Uncertainty', value: 'N/A', id: action.payload },
          { category: 'Complexity', value: 'N/A', id: action.payload },
          { category: 'Effort', value: 'N/A', id: action.payload },
        ],
      }
    default:
      return state
  }
}

export default userReducer

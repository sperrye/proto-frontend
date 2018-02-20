import { combineReducers } from 'redux'
import { GET_PROJECT_CARDS, ADD_PROJECT_CARD } from '../actions'

function projectCards(state = { all: [] }, action) {
  console.log("in reducer");
  switch (action.type) {
    case ADD_PROJECT_CARD:
    console.log(state.all, "state");
    console.log(action.payload, "action.payload");
      return {
        ...state,
        all: [...state.all, action.payload]
      }
    case GET_PROJECT_CARDS:
      return {
        ...state,
        all: action.payload
      }
    default:
      return state
  }
}

export default combineReducers({
  projectCards
})

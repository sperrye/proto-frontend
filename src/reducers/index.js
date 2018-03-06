import { combineReducers } from 'redux'
import { GET_PROJECT_CARDS, ADD_PROJECT_CARD } from '../actions'

function projectCards(state = { all: [] }, action) {
  console.log("helloooo")
  switch (action.type) {
    case ADD_PROJECT_CARD:
      console.log(state, "state in ADD")
      return {
        ...state,
        all: [...state.all, action.payload]
      }
    case GET_PROJECT_CARDS:
      console.log(state, "state in GET");
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

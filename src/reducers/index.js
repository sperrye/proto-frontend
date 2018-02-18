import { combineReducers } from 'redux'
import { GET_PROJECT_CARDS, ADD_PROJECT_CARD } from '../actions'

function whattheheck(state = { all: [] }, action) {
  console.log("in WHATTHEHECK reducer");
  switch (action.type) {
    case ADD_PROJECT_CARD:
      return {
        ...state,
        all: action.payload
      }
    default:
      return state
  }
}

function projectCards(state = { all: [] }, action) {
  console.log("in reducer");
  switch (action.type) {
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
  projectCards, whattheheck
})

import { combineReducers } from 'redux'
import { GET_PROJECT_CARDS, ADD_PROJECT_CARD } from '../actions'

function projectCards(state = { all: [] }, action) {
  switch (action.type) {
    case ADD_PROJECT_CARD:
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

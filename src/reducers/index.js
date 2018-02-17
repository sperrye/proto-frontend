import { combineReducers } from 'redux'
import { GET_PROJECT_CARDS } from '../actions'

function projectCards(state = { all: [] }, action) {
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

export default combineReducers({ projectCards })

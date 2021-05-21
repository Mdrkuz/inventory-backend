import { createStore, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk';

export const lineReducer = (state = {list: []}, action) => {
  switch(action.type) {
    case 'LOAD_LIST': 
      return {
        ...state,
        list: action.list,
      }
    case 'INCREMENT_QUANTITY':
      return {
        ...state,
        list: action.list
      }
    case 'DECREMENT_QUANTITY':
      return {
        ...state,
        list: action.list
      }
    default:
      return state
  }
}

const store = createStore(lineReducer, applyMiddleware(thunk)) 
export default store;
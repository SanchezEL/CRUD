// import {combineReducers} from "redux";

// function cars(state = "") { 
//   return state;
// }
// function newCar(state = [], action){
//   state.push(action.value)
//   return state;
// }


// const rootReducer = combineReducers({
//   cars,
//   newCar
// });
// export default rootReducer;
import { combineReducers } from 'redux'

const cars = (state = [], action) => {
  // state = movies
  let newState = [ ...state ]
  switch (action.type) {
    case 'LIST_CARS':
      return action.value
    case 'CREATE_CAR':
      newState.push(action.value)
      return newState
    // case 'DELETE_MOVIE':
    //   const index = newState.findIndex(m => m.movieName === action.value)
    //   index > -1 && newState.splice(index, 1)
    //   return newState
    default:
      return state
  }
}

export default combineReducers({
  cars
})
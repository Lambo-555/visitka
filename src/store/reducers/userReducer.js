import {USER_ADD, USER_DELETE} from "../actions/actionTypes";

const initialState = {
  users: [
    { name: "Stanislav", age: 28 }
  ]
}

export default function  counterReducer(state = initialState, action){
  switch (action.type) {
    case USER_ADD:
      return {...state, counter: state.counter + 1};
    case USER_DELETE:
      return {...state, counter: state.counter - 1};
    default:
      return state
  }
}
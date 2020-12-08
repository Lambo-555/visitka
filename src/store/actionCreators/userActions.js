import {USER_ADD, USER_DELETE} from '../actions/actionTypes'

export function userCreate(name) {
  return {
      type: USER_ADD,
      payload: name
  };
}

//TODO extra actions
export function userAddInfo(key, value) {
  return {
      type: USER_ADD,
      payload: {key, value}
  };
}

export function userRemove(name) {
  return {
      type: USER_DELETE,
      payload: {name}
  };
}

/*
export function timerAdd(number) {
  return {
    type: TIMER_ADD,
    payload: number
  }
}


export function timerAddAsync(number) {
  return (dispatch) => {
    let timerId = setInterval(() => {
      dispatch(timerAdd(number))
    }, 550)
    setTimeout(() => {
      clearInterval(timerId)
    }, 5500)
  };
}
*/
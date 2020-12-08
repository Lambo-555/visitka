import {SETTINGS_SET_LANGUAGE, SETTINGS_SET_THEME} from '../actions/actionTypes'

export function settingsSetLanguage(language) {
  return {
      type: SETTINGS_SET_LANGUAGE,
      payload: language
  };
}

export function settingsSetTheme(theme) {
  return {
      type: SETTINGS_SET_THEME,
      payload: theme
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
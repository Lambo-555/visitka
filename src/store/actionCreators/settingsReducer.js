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
import { SETTINGS_SET_LANGUAGE, SETTINGS_SET_THEME } from "../actions/actionTypes";

const initialState = {
  currentLang: 'en',
  currentTheme: 'light',
  languages: ['ru', 'en'],
  themes: ['light', 'dark', 'colored'],
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case SETTINGS_SET_LANGUAGE:
      return { ...state, currentLang: action.payload };
    case SETTINGS_SET_THEME:
      return { ...state, currentTheme: action.payload };
    default:
      return state
  }
}
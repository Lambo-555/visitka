import {combineReducers} from "redux";

import userReducer from './itemReducer';
import itemReducer from './userReducer';
import settingsReducer from './settingsReducer';

export default combineReducers({
  userReducer, itemReducer, settingsReducer
});
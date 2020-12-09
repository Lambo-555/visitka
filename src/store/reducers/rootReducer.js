import {combineReducers} from "redux";

import userReducer from './itemReducer';
import itemReducer from './userReducer';
import settingsReducer from './settingsReducer';
import challengeReducer from './challengeReducer';

export default combineReducers({
  userReducer, itemReducer, settingsReducer, challengeReducer
});
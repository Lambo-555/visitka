import {createStore, compose, applyMiddleware} from "redux";
import rootReducer from './reducers/rootReducer'
import thunk from "redux-thunk"

// ______________ CUSTOM MIDDLEWARE  _______________
/*
const logger = store => next => action => {
  const result = next(action);
  let { timerReducer, counterReducer } = store.getState();
  // console.clear();
  console.log(
    'timer', timerReducer ? timerReducer.time : '',
    '\ncounter', counterReducer ? counterReducer.counter : ''
  );
  return result;
};
*/

// ______________ DEV TOOLS INIT _______________
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;
// ______________ STORE INIT _______________
const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(
            thunk,
            // logger
        )
    )
);

export default store;
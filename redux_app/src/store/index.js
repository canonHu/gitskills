import reducers from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// console.log(actions, reduces);

const logger = store => next => action => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd(action.type);
  return result;
};

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(logger)
  )
)

export default store;
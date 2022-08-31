import { combineReducers } from "redux";

// import all reducers here
import passwordReducer from "./passwordReducer";

// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  accounts: passwordReducer,
});

// make the combined reducers available for import
export default reducers;

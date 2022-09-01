// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import reducers from "../client/reducers/index";

// // we are adding composeWithDevTools here to get easy access to the Redux dev tools
// const store = createStore(reducers, composeWithDevTools());

// export default store;

import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../client/reducers/index";
import { configureStore } from "@reduxjs/toolkit";

// we are adding composeWithDevTools here to get easy access to the Redux dev tools
const vanillaPromise = (store) => (next) => (action) => {
  if (typeof action.then !== "function") {
    return next(action);
  }

  return Promise.resolve(action).then(store.dispatch);
};

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vanillaPromise),
});

export default store;

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import { combineReducers } from "redux";
import passwordReducer from "../client/reducers/passwordReducer";
const combinedReducers = combineReducers({
  passwordReducerFunc: passwordReducer,
});
// require("../client/style.css");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("contents")
);

export default combinedReducers;

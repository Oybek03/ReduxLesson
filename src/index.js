import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";
import App from "./components/App";

ReactDOM.render(
  <Provider store={createStore(allReducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

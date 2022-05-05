import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import allReducers from "./reducers";

ReactDOM.render(
  <Provider store={createStore(allReducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);



///////////////////////////////////////
// const Redux = require("redux");

// const first = (name, time) => {
//   return {
//     type: "QUSHISH",
//     payload: {
//       name: name,
//       time: time,
//     },
//   };
// };

// const second = (name) => {
//   return {
//     type: "OCHIRISH",
//     payload: {
//       name: name,
//     },
//   };
// };

// const addMusic = (history = [], form) => {
//   if (form.type == "QUSHISH") {
//     return (history = [...history, form.payload]);
//   }
//   return history;
// };

// const deleteMusic = (history = [], form) => {
//   if (form.type === "OCHIRISH") {
//     // const remove = history.findIndex((val) => {
//     //   val.name == form.payload.name;
//     // });
//     // return history.splice(remove, 1);

//     return (history = history.filter((val) => {
//       return val.payload.name != form.payload.name;
//     }));
//   }
//   return history;
// };
// const { createStore, combineReducers } = Redux;
// const departament = combineReducers({
//   addMusic: addMusic,
//   deleteMusic: deleteMusic,
// });

// const create = createStore(departament);

// create.dispatch(first("yulduzwq", 5));
// create.dispatch(first("yulduzw", 5));
// create.dispatch(first("yulduzd", 5));
// create.dispatch(first("yulduz", 5));
// create.dispatch(second("yulduz"));
// console.log(create.getState());

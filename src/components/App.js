import React from "react";
import Redux from "redux";

const App = (props) => {
  console.log(props);
  return <h1>props</h1>;
};

export default App;

//////////////////////////////////////////////////////////
// const signUpContract = (name,money)=>{
//   return {
//     type:"SIGN_UP",
//     payload:{
//       name:name,
//       amount:money
//     }
//   }
// }
// const getMoney = (name,amount)=>{
//   return {
//     type:"GET_MONEY",
//     payload:{
//       name:name,
//       amout:amount
//     }
//   }
// }

// const cancelContract = (name)=>{
//   return {
//     type:"CANCEL",
//     payload:{
//       name:name,
//     }
//   }
// }

// const claimHistory = (history=[],form)=>{
//   if(form.type==="GET_MONEY"){
//     return history = [...history,form.payload];
//   }
//   return history;
// }

// const accounting = (allMoney=100,form)=>{
//   if(form.type==="SIGN_UP"){
//     return allMoney = allMoney+form.payload.amount;
//   }
//  else if(form.type==="GET_MONEY"){
//     return allMoney = allMoney-form.payload.amount;
//   }
//     return allMoney;
// }

// const policies = (history=[],form)=>{
//   if(form.type==="SIGN_UP"){
//     return history = [...history,form.payload]
//   }
//   return history;
// }

// const {configureStore,combineReducers}=Redux;
// const departaments = combineReducers(
// {
//   accounting:accounting,
//   claimHistory:claimHistory,
//   policies:policies,
// }
// )
// const store = configureStore(departaments);
// console.log(store);
// const umid = getMoney("Umid",20);
// store.dispatch(umid);

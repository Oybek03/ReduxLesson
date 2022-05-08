import { combineReducers } from "redux";
import addReducers from "./addReducers";
import deleteReducers from "./deleteReducers";

const allReducers = combineReducers({
  addReducers,
  deleteReducers,
});
export default allReducers;

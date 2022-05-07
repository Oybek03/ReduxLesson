import { combineReducers } from "redux";
import selectSongReducer from "./selectSongReducers";
import songListReducer from "./songListReducers";

const allReducers = combineReducers({
  selectSongReducer,
  songListReducer,
});
export default allReducers;

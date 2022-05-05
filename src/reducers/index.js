import { combineReducers } from "redux";
const songList = [
  {
    name: "Uzbek",
    time: "3:55",
    author: "uzim",
  },
  {
    name: "russian",
    time: "3:57",
    author: "boshqa",
  },
  {
    name: "kazak",
    time: "3:15",
    author: "babay",
  },
];

const songListReducer = (history = songList, song) => {
  return history;
};

const selectSongReducer = (history = [], selectedSong) => {
  if (selectedSong.type === "SELECTED") {
    return selectedSong.payload;
  }
  return history;
};

const allReducers = combineReducers({
  songList: songListReducer,
  selectedSong: selectSongReducer,
});
export default allReducers;

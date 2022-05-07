const selectSongReducer = (history = [], data) => {
  if (data.type === "SELECTED") {
    return data.payload;
  }
  return history;
};

export default selectSongReducer;

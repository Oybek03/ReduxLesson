const songListReducer = (
  history = [
    {
      name: "Uzbek",
      time: "3:55",
      author: "uzim",
    },
  ],
  song
) => {
  if (song.type === "ADD") {
    return (history = [...history, song.payload]);
  }
  return history;
};

export default songListReducer;

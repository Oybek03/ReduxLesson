export const selectSongAction = (data) => {
  return { type: "SELECTED", payload: data };
};

export const addSongAction = (data) => {
  return {
    type: "ADD",
    payload: data,
  };
};

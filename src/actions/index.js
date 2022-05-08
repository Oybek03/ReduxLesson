export const newCardAction = (data) => {
  return { type: "ADD", payload: data };
};

export const deleteCardAction = (data) => {
  return {
    type: "DEL",
    payload: data,
  };
};

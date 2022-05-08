const deleteReducers = (history = [], data) => {
  if (data.type === "DEL") {
    return (history = data.payload);
  }
  return history;
};

export default deleteReducers;

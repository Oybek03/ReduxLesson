const addReducers = (history = [], data) => {
  if (data.type === "ADD") {
    return (history = [...history, data.payload]);
  }
  return history;
};

export default addReducers;

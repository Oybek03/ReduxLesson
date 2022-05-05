import React from "react";
import reactRedux from "react-redux";
const SongList = () => {
  return <div>Salom</div>;
};

const getMyState = (data) => {
  return data;
};
export default reactRedux.connect()(SongList);

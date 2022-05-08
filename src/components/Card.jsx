import React, { useState } from "react";
import { connect } from "react-redux";
import { newCardAction } from "../actions/index";

import CardList from "./CardList";
function Card(props) {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <div className="cards">
        <div className="card">
          <textarea
            placeholder="writeng...."
            onChange={handleChange}
          ></textarea>
          <div className="card--footer">
            <p className="card--limit">{300 - value.length}</p>
            <button
              onClick={() => {
                props.newCardAction({ value });
                document.querySelector(".card--input-2").value = "";
              }}
              className="ui button green"
            >
              Save
            </button>
          </div>
        </div>
        <CardList />
      </div>
    </div>
  );
}
const getMyState = (state) => {
  return state;
};

export default connect(getMyState, {
  newCardAction,
})(Card);

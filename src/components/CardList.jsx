import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteCardAction } from "../actions";
function CardList(props) {
  console.log(props);
  const [btnValue, setBtnValue] = useState(true);
  return (
    <div>
      {props.addReducer.map((val) => {
        return (
          <div
            key={val.id}
            className="card"
            style={{ backgroundColor: btnValue ? "green" : "blue" }}
          >
            <textarea
              defaultValue={val.value}
              readOnly={btnValue}
              cols="30"
              rows="10"
              className="card--input-2"
              style={{
                backgroundColor: btnValue ? "green" : "blue",
                borderRadius: "10px",
              }}
            ></textarea>
            <div
              className="card--footer"
              style={{ backgroundColor: btnValue ? "green" : "blue" }}
            >
              <p className="card--limit"> {new Date().toLocaleDateString()}</p>
              <button
                onClick={() => {
                  setBtnValue(!btnValue);
                }}
                className="card--edit-btn"
                style={{ backgroundColor: "blue" }}
              >
                {btnValue ? "Edit" : "Save"}
              </button>
              <button
                onClick={() => {
                  props.deleteCardAction(val);
                  let uniqueItem = deleteCardAction(val).payload;
                  let Arr = props.addReducer;
                  let index = Arr.indexOf(uniqueItem);
                  Arr.splice(index, 1);
                }}
                className="card--delete-btn"
                style={{ backgroundColor: "red" }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
const getState = (state) => state;
export default connect(getState, { deleteCardAction })(CardList);

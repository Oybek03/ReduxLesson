import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteCardAction } from "../actions";
function CardList(props) {
  console.log(props);
  const [btnValue, setBtnValue] = useState(true);
  let sana = new Date();
  return (
    <div>
      {props.addReducers.map((val) => {
        return (
          <div key={val.id} className="card">
            <textarea
              defaultValue={val.value}
              readOnly={btnValue}
              cols="30"
              rows="10"
              className="card--input-2"
            ></textarea>
            <div className="card--footer">
              <p className="card--limit">
                {sana.getDate()} /{sana.getMonth() + 1}/{sana.getFullYear()} yil
              </p>

              <button
                onClick={() => {
                  document.querySelector(".card--input-2").value = "";
                }}
                className="card--delete-btn"
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

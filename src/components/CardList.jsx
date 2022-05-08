import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteCardAction } from "../actions";
function CardList(props) {
  console.log(props);
  const [btnValue, setBtnValue] = useState(true);
  let sana = new Date();
  return (
    <div className="list">
      {props.addReducers.map((val) => {
        return (
          <div key={val.id} className="card">
            <textarea defaultValue={val.value} readOnly={btnValue}></textarea>
            <div className="card--footer">
              <p className="card--limit">
                {sana.getDate()} /{sana.getMonth() + 1}/{sana.getFullYear()} yil
                <br />
                {sana.getHours()}: {sana.getMinutes()}
              </p>

              <button className="ui button red">Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
const getState = (state) => state;
export default connect(getState, { deleteCardAction })(CardList);

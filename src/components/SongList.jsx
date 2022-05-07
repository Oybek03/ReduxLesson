import React from "react";
import { connect } from "react-redux";
import selectSong from "../actions";
const SongList = (props) => {
  console.log(props);
  return props.songListReducer.map((val) => {
    return (
      <div className="ui container" key={val.time}>
        <div className="ui cards">
          <div className="card">
            <div className="content">
              <img
                className="right floated mini ui image"
                src="https://play-lh.googleusercontent.com/QovZ-E3Uxm4EvjacN-Cv1LnjEv-x5SqFFB5BbhGIwXI_KorjFhEHahRZcXFC6P40Xg"
              />
              <div className="header">{val.name}</div>
              <div className="meta">{val.time}</div>
              <div className="description">{val.author}</div>
            </div>
            <div className="extra content">
              <div className="ui two buttons">
                <div
                  onClick={() => {
                    props.selectSong(val);
                  }}
                  className="ui basic green button"
                >
                  Select Song
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

const getMyState = (data) => {
  return data;
};
export default connect(getMyState, {
  selectSong,
})(SongList);

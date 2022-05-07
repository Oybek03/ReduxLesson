import React from "react";
import { connect } from "react-redux";
class SongDetail extends React.Component {
  renderDetail() {
    if (this.props.selectSongReducer.name) {
      return (
        <div>
          <div className="ui card">
            <div class="image">
              <img src="https://www.schooldrillers.com/st-jairus-stainless-love/st-jairus/" />
            </div>
            <div class="content">
              <a class="header">{this.props.selectSongReducer.name}</a>
              <div class="meta">
                <span class="date">{this.props.selectSongReducer.time}</span>
              </div>
              <div class="description">
                {this.props.selectSongReducer.author}
              </div>
            </div>
            <div class="extra content">
              <a>
                <i class="user icon"></i>
                22 Friends
              </a>
            </div>
          </div>
        </div>
      );
    } else {
      return <div>No results...</div>;
    }
  }
  render() {
    return <div>{this.renderDetail()}</div>;
  }
}

const getMyState = (state) => {
  return state;
};
export default connect(getMyState)(SongDetail);

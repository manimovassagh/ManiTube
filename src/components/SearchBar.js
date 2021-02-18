import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className=" search-bar ui segment violet inverted header">
        <form className="ui form ">
          <div className="field">
            <label className="ui grey inverted header">Search Video</label>
            <input type="text" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

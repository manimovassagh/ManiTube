import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    // make sure to call
    //callback from parent component
  };
  render() {
    return (
      <div className=" search-bar ui segment violet inverted header">
        <form onSubmit={this.onFormSubmit} className="ui form ">
          <div className="field">
            <label className="ui grey inverted header">Search Video</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

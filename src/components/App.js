import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = {};
  render() {
    return (
      <div className="ui container">
        <SearchBar />
        <h1> Mani Tube</h1>
      </div>
    );
  }
}

export default App;

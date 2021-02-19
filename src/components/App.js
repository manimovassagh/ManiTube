import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube.js";

const KEY = "AIzaSyA2H0ZScotAnSmNn22vaC05A4AsSPWWbhA";

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        key: KEY,
      },
    });
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />I have{' '}
        {this.state.videos.length} videos.
      </div>
    );
  }
}

export default App;

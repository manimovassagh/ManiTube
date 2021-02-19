import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube.js";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import "./App.css";

const KEY = "AIzaSyA2H0ZScotAnSmNn22vaC05A4AsSPWWbhA";

class App extends React.Component {
  state = { videos: [], SelectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("Javascript");
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 10,
        type: "video",
        key: KEY,
      },
    });
    this.setState({
      videos: response.data.items,
      SelectedVideo: response.data.items[0],
    });
  };
  onVideoSelect = (video) => {
    this.setState({ SelectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <div className="badge"> <h2>ManiTube</h2> </div>
        <SearchBar onFormSubmit={this.onTermSubmit} />

        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.SelectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

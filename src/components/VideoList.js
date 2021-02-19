import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  //props.videos
  const RenderedList = videos.map((video) => {
    return <VideoItem onVideoSelect={onVideoSelect} video={video} />;
  });
  return <div className="ui relax devided list">{RenderedList}</div>;
};
export default VideoList;

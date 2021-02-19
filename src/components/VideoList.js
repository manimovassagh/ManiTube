import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  //props.videos
  const RenderedList = videos.map(video=>{
      return <VideoItem video={video} />
  })
  return <div className='ui relax devided list'>{RenderedList}</div>;
};
export default VideoList;

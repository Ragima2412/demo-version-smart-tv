import React from "react";
import Video from "../../assets/video/mountains.mp4";
import "./VideoPlayer";

const VideoPlayer = () => {
  return (
    <div className="video-player" >
      <video  width="1280" height="720" loop autoPlay muted >
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    
    </div>
  );
};
export default VideoPlayer;

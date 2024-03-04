import React from "react";

const VideoFrame = ({ videoId }) => {
  return (
    <iframe
      width="890"
      height="500"
      src={"https://www.youtube.com/embed/" + videoId}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="videoPlayer mx-28 bg-gray-100 rounded-xl my-5"
    ></iframe>
  );
};

export default VideoFrame;

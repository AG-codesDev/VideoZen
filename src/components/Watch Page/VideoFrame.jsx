import React from "react";

const VideoFrame = ({ videoId }) => {
  return (
    <iframe
      // width="810"
      // height="500"
      src={"https://www.youtube.com/embed/" + videoId}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="videoPlayer bg-gray-100 rounded-xl w-full lg:h-[30rem] h-[20rem] my-5"
    ></iframe>
  );
};

export default VideoFrame;

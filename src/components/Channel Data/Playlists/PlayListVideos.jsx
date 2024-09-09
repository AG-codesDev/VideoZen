import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PlayListVideos = ({ video }) => {
  const isDarkModeActive = useSelector((store) => store.app.darkMode);
  return (
    <Link to={"/watch?v=" + video.contentDetails.videoId}>
      <div
        className={`${
          isDarkModeActive
            ? "text-white hover:bg-zinc-800"
            : "hover:bg-gray-100"
        } video-box flex gap-4 lg:mt-0 md:mt-0  lg:ml-96 transition-all p-1`}
      >
        <span className="self-center my-4 font-semibold hidden lg:block">
          {video.snippet.position + 1}
        </span>
        <div className=" ">
          <img
            src={video.snippet.thumbnails.medium.url}
            alt=""
            className="my-3 rounded-lg h-36 w-56"
          />
        </div>
        <div className="w-1/2 lg:w-[60%] flex flex-col gap-3">
          <p className="videoTitle lg:font-semibold text-medium lg:text-lg mt-2">
            {video.snippet.title}
          </p>
          <p className="ml-1">{video.snippet.channelTitle}</p>
          <p className="text-sm  h-10 overflow-y-clip hidden lg:block">
            {video.snippet.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PlayListVideos;

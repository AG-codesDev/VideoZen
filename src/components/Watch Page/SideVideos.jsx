import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideVideos = ({ video }) => {
  const isDarkModeActive = useSelector((store) => store.app.darkMode);

  return (
    <div
      className={`${
        isDarkModeActive ? "text-white" : ""
      } sideVideo mt-5 my-4 gap-3 lg:gap-0 flex overflow-hidden justify-evenly`}
    >
      <Link to={"/watch?v=" + video.id.videoId} className="">
        <div className="imgBox w-fit ">
          <img
            src={video.snippet.thumbnails.medium.url}
            alt=""
            className="h-32 w-48 rounded-lg"
          />
        </div>
      </Link>
      <div className="w-[55%] mt-2 flex flex-col gap-5">
        <Link to={"/watch?v=" + video.id.videoId}>
          <p className="video-title font-medium text-sm">
            {video.snippet.title}
          </p>
        </Link>
        <Link to={"/channelPage?id=" + video.snippet.channelId}>
          <p className="channel-title flex items-center gap-1">
            {video.snippet.channelTitle}
            <IoMdCheckmarkCircle
              className={`${
                isDarkModeActive ? "text-white" : "text-gray-700"
              }mt-1`}
            />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SideVideos;

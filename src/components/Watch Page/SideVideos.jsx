import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const SideVideos = ({ video }) => {
  console.log(video);
  return (
    <div className="sideVideo mt-5 my-4 flex justify-evenly">
      <Link to={"/watch?v=" + video.id.videoId}>
        <div className="imgBox w-fit]">
          <img
            src={video.snippet.thumbnails.medium.url}
            alt=""
            className="h-32 w-48 rounded-lg"
          />
        </div>
      </Link>
      <div className="w-[55%] mt-2 flex flex-col gap-5">
        <Link to={"/watch?v=" + video.id.videoId}>
          <p className="video-title font-semibold text-sm">
            {video.snippet.title}
          </p>
        </Link>
        <Link to={"/channelPage?id=" + video.snippet.channelId}>
          <p className="channel-title flex items-center gap-1">
            {video.snippet.channelTitle}
            <IoMdCheckmarkCircle className="mt-1 text-gray-700" />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SideVideos;

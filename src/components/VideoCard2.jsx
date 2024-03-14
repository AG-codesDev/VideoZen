import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";

const VideoCard2 = ({ video }) => {
  const { snippet } = video;
  console.log(video);
  return (
    <div className="videoBox flex my-3 hover:bg-slate-50 gap-3 transition-all">
      <div className="imgxBox w-2/5">
        <img
          src={snippet.thumbnails.medium.url}
          alt=""
          className="h-72 rounded-xl"
        />
      </div>
      <div className="otherDetails flex flex-col my-2 gap-4 ml-3 w-3/5">
        <span className="video-title font-medium text-xl">{snippet.title}</span>
        <span className="Channelname flex items-center gap-3">
          <img
            src="https://cdn.pixabay.com/photo/2021/09/13/15/59/youtube-6621791_1280.jpg"
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <span className="flex gap-1">
            {snippet.channelTitle}{" "}
            <IoMdCheckmarkCircle className="mt-2 text-gray-500" />
          </span>
        </span>
        <span className="description overflow-hidden h-6 text-gray-500 text-sm font-semibold ">
          {snippet.description}
        </span>
      </div>
    </div>
  );
};

export default VideoCard2;

import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

const VideoCard = ({ videoInfo }) => {
  // console.log(videoInfo);
  const { snippet, statistics } = videoInfo;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  let currentTime = new Date();
  let postedAt = new Date(publishedAt);

  let daysAgo = Math.ceil((currentTime - postedAt) / (1000 * 60 * 60 * 24));
  //   console.log(hours);

  return (
    <div className=" w-fit flex flex-col my-2 cursor-pointer">
      <div className="imgbox mb-2">
        <img
          src={thumbnails.medium.url}
          alt=""
          className="rounded-xl hover:rounded-none transition-all w-72"
        />
      </div>
      <div className="title-views flex flex-col gap-2 ">
        <span className="title font-bold text-base w-72 h-12 overflow-hidden">
          {title}
        </span>
        <div className="channelTitle-views-timePosted">
          <span className="flex items-center gap-1 text-gray-700">
            {channelTitle} <IoMdCheckmarkCircle className="mt-1" />
          </span>
          <span className="text-gray-700 flex items-center">
            <span> {(statistics.viewCount / 1000).toFixed(1) + "K views"}</span>
            <GoDotFill className="text-black mt-1 mx-1 text-[0.5rem]" />
            <span>{daysAgo} day ago</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

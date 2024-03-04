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

  const days = (daysAgo) => {
    if (daysAgo < 30) {
      return daysAgo + " day";
    } else if (daysAgo > 30) {
      return Math.floor(daysAgo / 30) + " month";
    } else if (daysAgo > 365) {
      return Math.floor(daysAgo / 365) + " year";
    }
    // console.log(daysAgo);
  };
  return (
    <div className=" w-fit flex flex-col my-2 cursor-pointer ">
      <div className="imgbox mb-2">
        <img
          src={thumbnails.medium.url}
          alt=""
          className="rounded-xl hover:rounded-none transition-all w-[22rem]"
        />
      </div>

      <div className="title-views flex flex-col ">
        <div className="flex gap-2">
          <img
            src="https://cdn.pixabay.com/photo/2021/09/13/15/59/youtube-6621791_1280.jpg"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <span className="title font-semibold text-base w-72 h-12 overflow-hidden">
            {title}
          </span>
        </div>

        <div className="channelTitle-views-timePosted pl-12 mt-2">
          <span className="flex items-center gap-1 font-semibold text-gray-700">
            {channelTitle} <IoMdCheckmarkCircle className="mt-1" />
          </span>
          <span className="text-gray-700 flex items-center">
            <span>
              {statistics
                ? (statistics.viewCount / 100000).toFixed(1) + "M views"
                : null}
            </span>
            <GoDotFill className="text-black mt-1 mx-1 text-[0.5rem]" />
            <span>{days(daysAgo) + " ago"}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

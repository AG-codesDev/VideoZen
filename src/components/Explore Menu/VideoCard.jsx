import React, { useEffect, useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { YOUTUBE_CHANNEL_DATA } from "../../ultils/Constants";
import { Link } from "react-router-dom";

const VideoCard = ({ videoInfo }) => {
  // console.log(videoInfo);

  const [channelData, setChannelData] = useState([]);

  const { snippet, statistics } = videoInfo;
  // console.log();
  const { channelTitle, title, thumbnails, publishedAt, channelId } = snippet;
  const { id } = videoInfo;

  const getChannelLogo = async () => {
    const data = await fetch(YOUTUBE_CHANNEL_DATA + "&id=" + channelId);
    const json = await data.json();
    // console.log(json.items);
    setChannelData(json.items);
  };

  useEffect(() => {
    getChannelLogo();
  }, []);

  let currentTime = new Date();
  let postedAt = new Date(publishedAt);

  let daysAgo = Math.ceil((currentTime - postedAt) / (1000 * 60 * 60 * 24));

  const days = (daysAgo) => {
    if (daysAgo < 30) {
      return daysAgo + " day";
    } else if (daysAgo > 30) {
      return Math.floor(daysAgo / 30) + " month";
    } else if (daysAgo > 365) {
      return Math.floor(daysAgo / 365) + " year";
    }
  };
  return (
    <div className=" w-fit flex flex-col my-2 cursor-pointer">
      <Link to={"/watch?v=" + `${id}`}>
        <div className="imgbox mb-2">
          <img
            src={thumbnails.medium.url}
            alt=""
            className="rounded-xl hover:rounded-none transition-all w-[23rem]"
          />
        </div>
      </Link>

      <div className="title-views flex flex-col ">
        <div className="flex gap-2">
          <Link to={"/channelPage?id=" + videoInfo.snippet.channelId}>
            <img
              src={
                channelData.length > 0
                  ? channelData[0].snippet.thumbnails.high.url
                  : "none"
              }
              alt=""
              className="w-10 h-10 rounded-full"
            />
          </Link>
          <Link
            to={"/watch?v=" + `${id}`}
            className="title font-semibold text-base w-72 h-12 overflow-hidden"
          >
            <span>{title}</span>
          </Link>
        </div>

        <div className="channelTitle-views-timePosted pl-12">
          <Link to={"/channelPage?id=" + videoInfo.snippet.channelId}>
            <span className="flex items-center gap-1 mt-1 text-gray-700">
              {channelTitle} <IoMdCheckmarkCircle className="mt-1" />
            </span>
          </Link>

          <span className="text-gray-700 flex items-center">
            <span>
              {statistics
                ? (statistics.viewCount / 1000000).toFixed(1) + "M views"
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

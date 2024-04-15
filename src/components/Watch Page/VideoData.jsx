import React, { useEffect, useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { PiShareFat } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { PiDotsThreeBold } from "react-icons/pi";
import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { Link } from "react-router-dom";
import { YOUTUBE_CHANNEL_DATA } from "../../ultils/Constants";

const VideoData = ({ snippet, statistics }) => {
  // console.log(snippet);

  const [channelData, setChannelData] = useState([]);

  const getChannelLogo = async () => {
    const data = await fetch(YOUTUBE_CHANNEL_DATA + "&id=" + snippet.channelId);
    const json = await data.json();
    // console.log(json.items);
    setChannelData(json.items);
  };
  useEffect(() => {
    getChannelLogo();
  }, []);

  return (
    <div className="video-data flex flex-col w-full">
      <h1 className="video-title font-semibold text-xl">{snippet.title}</h1>

      <div className="flex items-center justify-between">
        <div className="channel-logo-subscribeBtn flex w-full my-3 items-center gap-4">
          <Link to={"/channelPage?id=" + snippet.channelId}>
            <img
              src={
                channelData.length > 0
                  ? channelData[0].snippet.thumbnails.high.url
                  : "none"
              }
              alt="channel-logo"
              className="w-12 h-12 rounded-full"
            />
          </Link>
          <Link to={"/channelPage?id=" + snippet.channelId}>
            <span className="font-bold flex items-center text-xl gap-1">
              {snippet.channelTitle}
              <IoMdCheckmarkCircle className="mt-1 text-gray-600" />
            </span>
          </Link>
          <button className="bg-black text-white px-4 py-2 font-medium text-[0.9rem] rounded-3xl">
            Subscribe
          </button>
        </div>
        <div className="like-dislike-share-download flex gap-6 ">
          <span className="bg-slate-100 flex gap-3  rounded-2xl px-3 py-1">
            <button className="flex gap-1 items-center ">
              <AiOutlineLike className=" text-xl" />{" "}
              <span className="text-sm">
                {(statistics.likeCount / 1000).toFixed(1) + "k"}
              </span>
            </button>
            <button>
              <AiOutlineDislike className=" text-xl" />
            </button>
          </span>
          <button className="bg-gray-100 flex rounded-2xl gap-1 px-3 py-1">
            <PiShareFat className=" text-xl rounded-lg" />
            <span className="text-sm">Share</span>
          </button>
          <button className="bg-gray-100 flex rounded-2xl gap-1 px-3 py-1">
            <LiaDownloadSolid className=" text-xl" />{" "}
            <span className="text-sm">Download</span>
          </button>
          <button className="bg-gray-100 px-1 text-xl rounded-full gap-1">
            <PiDotsThreeBold />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoData;

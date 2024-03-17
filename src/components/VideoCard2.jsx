import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { YOUTUBE_CHANNEL_DATA } from "../ultils/Constants";
import { useEffect, useState } from "react";

const VideoCard2 = ({ video }) => {
  const [channelData, setChannelData] = useState([]);

  const { snippet } = video;
  console.log(snippet);

  const getChannelLogo = async () => {
    const data = await fetch(YOUTUBE_CHANNEL_DATA + "&id=" + snippet.channelId);
    const json = await data.json();
    console.log(json.items);
    setChannelData(json.items);
  };

  useEffect(() => {
    getChannelLogo();
  }, []);

  return (
    // <Link to={"/watch?v=" + `${video.id.videoId}`}>
    <div className="videoBox flex my-3 hover:bg-slate-50 gap-3 transition-all">
      <Link to={"/watch?v=" + `${video.id.videoId}`} className="imgxBox w-2/5">
        <div>
          <img
            src={snippet.thumbnails.medium.url}
            alt=""
            className="h-72 rounded-xl"
          />
        </div>
      </Link>
      <div className="otherDetails flex flex-col my-2 gap-4 ml-3 w-3/5">
        <Link to={"/watch?v=" + `${video.id.videoId}`} className="">
          <span className="video-title font-medium text-xl">
            {snippet.title}
          </span>
        </Link>
        <span className="Channelname flex items-center gap-3">
          <img
            src={
              channelData.length > 0
                ? channelData[0].snippet.thumbnails.high.url
                : "none"
            }
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <Link to={"/channelPage?id=" + snippet.channelId} className="">
            <span className="flex gap-1">
              {snippet.channelTitle}{" "}
              <IoMdCheckmarkCircle className="mt-2 text-gray-500" />
            </span>
          </Link>
        </span>
        <span className="description overflow-hidden h-6 text-gray-500 text-sm font-semibold ">
          <Link to={"/watch?v=" + `${video.id.videoId}`} className="">
            {snippet.description}
          </Link>
        </span>
      </div>
    </div>
    // </Link>
  );
};

export default VideoCard2;

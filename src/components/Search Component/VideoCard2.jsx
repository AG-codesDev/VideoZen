import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { YOUTUBE_CHANNEL_DATA } from "../../Utils/Constants";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const VideoCard2 = ({ video }) => {
  const [channelData, setChannelData] = useState([]);
  const isDarkModeActive = useSelector((store) => store.app.darkMode);

  const { snippet } = video;
  // console.log(snippet);

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
    <div
      className={` ${
        isDarkModeActive
          ? "bg-zinc-900 hover:bg-zinc-900 text-white"
          : "bg-gray-100 hover:bg-gray-200"
      } videoBox flex  flex-col sm:flex-row my-7  items-center md:items-start transition-all`}
    >
      <Link to={"/watch?v=" + `${video.id.videoId}`} className="imgxBox">
        <div className=" md:mr-5">
          <img
            src={snippet.thumbnails.medium.url}
            alt=""
            className="h-60 rounded-xl w-screen md:w-full"
          />
        </div>
      </Link>
      <div className="otherDetails flex flex-col my-2 gap-5 px-2 md:w-3/5 w-full">
        <Link to={"/watch?v=" + `${video.id.videoId}`} className="">
          <span className="video-title text-md md:font-semibold">
            {snippet.title}
          </span>
        </Link>
        <span className="Channelname flex items-center gap-3">
          <Link to={"/channelPage?id=" + snippet.channelId} className="">
            <img
              src={
                channelData.length > 0
                  ? channelData[0].snippet.thumbnails.high.url
                  : "none"
              }
              alt=""
              className="h-10 w-10 rounded-full"
            />
          </Link>
          <Link to={"/channelPage?id=" + snippet.channelId} className="">
            <span className="flex gap-1">
              {snippet.channelTitle}{" "}
              <IoMdCheckmarkCircle className="mt-2 text-gray-500" />
            </span>
          </Link>
        </span>
        <span className="description h-20 text-gray-500 font-semibold hidden md:block ">
          <Link to={"/watch?v=" + `${video.id.videoId}`} className="">
            {snippet.description}
          </Link>
        </span>
      </div>
    </div>
  );
};

export default VideoCard2;

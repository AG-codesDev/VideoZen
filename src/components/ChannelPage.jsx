import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_CHANNEL_DATA } from "../ultils/Constants";
import { IoPeopleOutline } from "react-icons/io5";
import { RiYoutubeLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";

const ChannelPage = () => {
  const [searchParams] = useSearchParams();
  const channelId = searchParams.get("id");
  // console.log(channelId);
  const [channelData, setChannelData] = useState([]);
  const getChannelData = async () => {
    const data = await fetch(YOUTUBE_CHANNEL_DATA + "&id=" + channelId);
    const json = await data.json();
    setChannelData(json.items[0]);
  };
  useEffect(() => {
    getChannelData();
  }, []);

  if (channelData.length === 0) {
    return "...";
  }
  // console.log(channelData);
  return (
    <div className="mt-14 flex flex-col items-center gap mx-auto  w-fit bg-slate-50 rounded-md p-5">
      <div className="imgBox mb-4 ">
        <img
          src={channelData.snippet.thumbnails.medium.url}
          alt=""
          className="h-56 w-56 rounded-full"
        />
      </div>
      <div className="otherdetails flex flex-col">
        <h1 className="heading font-bold text-4xl text-center mb-2">
          {channelData.snippet.title}
        </h1>
        <span className="flex flex-col items-center">
          <span className="@ mb-3">{channelData.snippet.customUrl}</span>
          <button className="bg-red-600 rounded-3xl text-white flex items-center gap-2 py-2 px-3">
            <span>Subscribe</span>
            <span>
              <FaRegBell className="mt-1" />
            </span>
          </button>
          <p className="description w-[60rem] text-center my-4">
            {channelData.snippet.description}
          </p>

          <span className="flex items-center gap-1  w-48 my-2">
            <IoPeopleOutline className="text-2xl font-semibold" />
            <span className="text-md font-semibold">Subscribers:</span>
            <span className="ml-1">
              {" "}
              {channelData.statistics.subscriberCount}
            </span>
          </span>
          <span className="flex items-center gap-1 w-48 my-1">
            <RiYoutubeLine className="text-2xl font-semibold" />
            <span className="text-md font-semibold">Total Videos:</span>
            <span className="ml-1"> {channelData.statistics.videoCount}</span>
          </span>
        </span>

        <span></span>
        <button></button>
      </div>
    </div>
  );
};

export default ChannelPage;

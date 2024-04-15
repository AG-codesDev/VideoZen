import React from "react";
import { FaRegBell } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import { IoPeopleOutline } from "react-icons/io5";

const ChannelDetails = ({ channelData }) => {
  return (
    <div className="mt-20 flex bg-slate-50 rounded-md p-3">
      <div className="imgBox w-[30%] flex items-center justify-center ">
        <img
          src={channelData.snippet.thumbnails.high.url}
          alt=""
          className="h-72 w-72 rounded-full"
        />
      </div>

      <div className="flex w-[70%] flex-col">
        <h1 className="heading font-bold text-4xl ">
          {channelData.snippet.title}
        </h1>

        <div className="flex flex-col">
          <span className="@ my-1">{channelData.snippet.customUrl}</span>

          <button className="bg-red-600 my-2 rounded-3xl w-fit text-white flex items-center gap-2 py-2 px-3">
            <span>Subscribe</span>
            <span>
              <FaRegBell className="mt-1" />
            </span>
          </button>

          <p className="description my-3">{channelData.snippet.description}</p>

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
        </div>
      </div>
    </div>
  );
};

export default ChannelDetails;

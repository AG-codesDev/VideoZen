import React from "react";
import { FaRegBell } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import { IoPeopleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const ChannelDetails = ({ channelData }) => {
  const isDarkModeActive = useSelector((store) => store.app.darkMode);

  return (
    <div
      className={` ${
        isDarkModeActive ? "bg-zinc-900 text-white" : "bg-slate-50"
      } mt-8  flex flex-col lg:flex-row justify-around gap-5 items-center rounded-md px-3 py-8`}
    >
      <div className="imgBox flex items-center justify-center ">
        <img
          src={channelData.snippet.thumbnails.high.url}
          alt=""
          className="h-44 w-44 lg:h-72 lg:w-72 rounded-full"
        />
      </div>

      <div className="flex w-full md:w-4/5 flex-col">
        <h1 className="heading font-bold text-2xl md:text-4xl text-center ">
          {channelData.snippet.title}
        </h1>

        <div className="flex flex-col">
          <span className="@ text-center my-1">
            {channelData.snippet.customUrl}
          </span>

          <button className="bg-red-600 mx-auto lg: my-2 rounded-3xl w-fit text-white flex items-center gap-2 py-2 px-3">
            <span>Subscribe</span>
            <span>
              <FaRegBell className="mt-1" />
            </span>
          </button>

          <p className="description lg:px-5 my-3">
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
        </div>
      </div>
    </div>
  );
};

export default ChannelDetails;

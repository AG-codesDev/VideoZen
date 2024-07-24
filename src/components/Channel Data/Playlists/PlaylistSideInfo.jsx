import React from "react";
import { RiPlayListAddFill } from "react-icons/ri";
import { RiShareForwardLine } from "react-icons/ri";
import { TfiDownload } from "react-icons/tfi";
import { SlOptionsVertical } from "react-icons/sl";
import { FaPlay } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const PlaylistSideInfo = ({}) => {
  const location = useLocation();
  const { state } = location;

  return (
    <div>
      <div className="sideInfo flex flex-col w-screen lg:fixed bg-gradient-to-b from-zinc-800 lg:w-fit to-zinc-500 lg:rounded-xl lg:h-[38rem] h-fit lg:mt-5">
        <img
          src={state.snippet.thumbnails.medium.url}
          className="lg:h-52 w-full  lg:rounded-xl"
          alt=""
        />
        <p className="text-white font-bold text-2xl mt-4 w-80  px-2">
          {state.snippet.title}
        </p>
        <p className="text-white mt-3 font-semibold px-2">
          {state.snippet.channelTitle}
        </p>
        <p className="text-white text-xs mt-3 px-2">
          {state.contentDetails.itemCount} videos
        </p>

        <div className="icons mt-6 flex gap-5 p-2">
          <button className=" rounded-full">
            <RiPlayListAddFill className="text-white text-lg" />
          </button>
          <button>
            <RiShareForwardLine className="text-white text-lg" />
          </button>
          <button>
            <TfiDownload className="text-white text-lg" />
          </button>
          <button>
            <SlOptionsVertical className="text-white text-lg" />
          </button>
        </div>

        <div className="mt-7 gap-5 hidden lg:flex p-2 ">
          <button className="px-9 py-1 rounded-2xl bg-white text-black flex items-center gap-2 ">
            <span>
              <FaPlay />
            </span>
            <span className="font-medium">Play all</span>
          </button>

          <button className="px-9 py-1 rounded-2xl bg-white text-black flex items-center gap-2 ">
            <span>
              <FaShuffle />
            </span>
            <span className="font-medium">Shuffle</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaylistSideInfo;

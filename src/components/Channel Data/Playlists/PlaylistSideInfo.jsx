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
      <div className="sideInfo fixed bg-gradient-to-t from-gray-700 w-fit p-5 to-gray-400 rounded-xl h-[38rem]">
        <img
          src={state.snippet.thumbnails.medium.url}
          className="h-52 w-80 rounded-xl"
          alt=""
        />
        <p className="text-white font-bold text-xl mt-4 w-80">
          {state.snippet.title}
        </p>
        <p className="text-white mt-3 font-semibold">
          {state.snippet.channelTitle}
        </p>
        <p className="text-white text-xs mt-3">
          {state.contentDetails.itemCount} videos
        </p>

        <div className="icons mt-6 flex gap-5">
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

        <div className="mt-7 gap-5 flex ">
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

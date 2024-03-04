import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { PiShareFat } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { PiDotsThreeBold } from "react-icons/pi";
import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";

const VideoData = ({ snippet, statistics }) => {
  return (
    <div className="video-data flex flex-col w-4/5 mx-28">
      <h1 className="video-title font-bold text-xl">{snippet.title}</h1>

      <div className="flex items-center justify-between">
        <div className="channel-logo-subscribeBtn flex w-fit my-3 items-center gap-4">
          <img
            src="https://cdn.pixabay.com/photo/2021/09/13/15/59/youtube-6621791_1280.jpg"
            alt="channel-logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-bold flex items-center gap-1">
            {snippet.channelTitle}{" "}
            <IoMdCheckmarkCircle className="mt-1 text-gray-600" />
          </span>
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

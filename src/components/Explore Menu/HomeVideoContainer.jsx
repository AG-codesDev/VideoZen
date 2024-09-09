import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../../Utils/Constants";
import VideoCard from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { addHomeVideos } from "../../Utils/appSlice";
import HomeShimmer from "../Shimmer/HomeShimmer";

const HomeVideoContainer = () => {
  const homeVideos = useSelector((store) => store.app.homeVideos);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const isDarkModeActive = useSelector((store) => store.app.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    dispatch(addHomeVideos(json.items));
  };
  if (homeVideos.length === 0) {
    return <HomeShimmer />;
  }
  const buttons = [
    "All",
    "Music",
    "Trailers",
    "Gaming",
    "Live",
    "News",
    "Cricket",
    "Sports",
    "New to You",
    "Watched",
    "Virat Kohli",
    "Comedy",
    "Finanace",
    "Shopping",
    "Akshay Saini",
    "Code With Harry",
    "Rohit Sharma",
    "T20 WC 2024",
    "Crime",
    "Hiring",
    "TCS",
    "Accenture",
    "Cognizant",
    "Zerodha",
    "Mahendra Singh Dhoni",
    "Jasprit Bumrah",
  ];
  return (
    <div
      className={` ${
        isDarkModeActive ? "bg-zinc-900" : ""
      } flex flex-col mt-12 lg:mt-[4.7rem]  gap-2 ease-in-out py-5 lg:py-3 ${
        isMenuOpen ? "lg:w-[88%] lg:ml-[11rem]" : ""
      }`}
    >
      <div className="no-scrollbar mx-5 my-2 flex flex-nowrap scroll-smooth gap-5 overflow-x-auto">
        {buttons.map((btn) => (
          <button
            key={btn}
            className={`${
              isDarkModeActive ? "bg-zinc-800 text-white hover:bg-zinc-700" : ""
            } flex-shrink-0 basis-auto w-auto font-semibold bg-gray-200 px-3 py-1 rounded-lg hover:bg-gray-300 transition-all`}
          >
            {btn}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 justify-evenly">
        {homeVideos.map((video) => (
          <VideoCard videoInfo={video} key={video.id} />
        ))}
      </div>
    </div>
  );
};

export default HomeVideoContainer;

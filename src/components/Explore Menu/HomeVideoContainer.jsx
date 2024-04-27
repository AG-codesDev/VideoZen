import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../../Utils/Constants";
import VideoCard from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../../Utils/appSlice";
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
    dispatch(addVideos(json.items));
  };
  if (homeVideos.length === 0) {
    return <HomeShimmer />;
  }
  return (
    <div
      className={` ${
        isDarkModeActive ? "bg-gray-900" : ""
      } flex flex-wrap mt-12 lg:mt-16  gap-2 justify-evenly ease-in-out py-5 lg:py-3 ${
        isMenuOpen ? "lg:w-[88%] lg:ml-[11rem]" : ""
      }`}
    >
      {homeVideos.map((video) => (
        <VideoCard videoInfo={video} key={video.id} />
      ))}
    </div>
  );
};

export default HomeVideoContainer;

// do the same thing for explore videos container

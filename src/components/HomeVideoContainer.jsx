import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../ultils/Constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../ultils/appSlice";
import ButtonList from "./ButtonList";
import Shimmer from "./Shimmer";

const HomeVideoContainer = () => {
  const homeVideos = useSelector((store) => store.app.homeVideos);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
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
    return <Shimmer />;
  }
  // console.log(homeVideos);
  return (
    <div
      className={`flex flex-wrap mt-5 gap-2 justify-evenly ${
        isMenuOpen ? "w-[88%] ml-[11.3rem]" : ""
      } px-2`}
    >
      {homeVideos.map((video) => (
        <Link
          to={"/watch?v=" + `${video.id.videoId || video.id}`}
          key={video.id.videoId || video.id}
          videoinfo={video}
        >
          <VideoCard videoInfo={video} />
        </Link>
      ))}
    </div>
  );
};

export default HomeVideoContainer;

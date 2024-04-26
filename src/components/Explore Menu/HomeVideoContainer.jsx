import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../../ultils/Constants";
import VideoCard from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../../ultils/appSlice";
import HomeShimmer from "../Shimmer/HomeShimmer";
import Error from "../Error/Error";

const HomeVideoContainer = () => {
  const homeVideos = useSelector((store) => store.app.homeVideos);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    dispatch(addVideos(json.items));
    // console.log(json);
  };
  if (homeVideos.length === 0) {
    return <HomeShimmer />;
  }
  console.log(homeVideos);
  return (
    <div
      className={`flex flex-wrap mt-16 lg:mt-20 gap-2 justify-evenly ease-in-out ${
        isMenuOpen ? "lg:w-[88%] lg:ml-[11.3rem]" : ""
      } px-2`}
    >
      {homeVideos.map((video) => (
        <VideoCard videoInfo={video} key={video.id} />
      ))}
    </div>
    // <Error />
  );
};

export default HomeVideoContainer;

// do the same thing for explore videos container

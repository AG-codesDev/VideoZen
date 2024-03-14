import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { addExploreVideos } from "../ultils/appSlice";
import ExploreVideosContainer from "./ExploreVideosContainer";
import { YOUTUBE_EXPLORE_VIDEOS } from "../ultils/Constants";
import { useSearchParams } from "react-router-dom";

const ExplorePage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("category");
  console.log(videoId);

  const getFilmsVideos = async () => {
    const data = await fetch(YOUTUBE_EXPLORE_VIDEOS + "&q=" + videoId);
    const json = await data.json();
    dispatch(addExploreVideos(json.items));
  };
  useEffect(() => {
    getFilmsVideos();
  });

  return <ExploreVideosContainer />;
};

export default ExplorePage;

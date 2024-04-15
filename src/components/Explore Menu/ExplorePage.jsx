import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { addExploreVideos } from "../../ultils/appSlice";
import ExploreVideosContainer from "./ExploreVideosContainer";
import {
  YOUTUBE_EXPLORE_VIDEOS,
  YOUTUBE_VIDEO_API,
} from "../../ultils/Constants";
import { useSearchParams } from "react-router-dom";

const ExplorePage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  // console.log(videoId);

  const getFilmsVideos = async () => {
    if (category === "Home") {
      const data = await fetch(YOUTUBE_VIDEO_API);
      const json = await data.json();
      dispatch(addExploreVideos(json.items));
      console.log(json);
    } else {
      const data = await fetch(YOUTUBE_EXPLORE_VIDEOS + "&q=" + category);
      const json = await data.json();
      dispatch(addExploreVideos(json.items));
    }
  };
  useEffect(() => {
    getFilmsVideos();
  });

  return <ExploreVideosContainer />;
};

export default ExplorePage;

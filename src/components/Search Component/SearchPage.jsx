import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_RESULT_VIDEOS } from "../../ultils/Constants";
import SearchVideoContainer from "./SearchVideoContainer";
import { useDispatch } from "react-redux";
import { addSearchVideos } from "../../ultils/appSlice";

const SearchPage = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("result");

  const getSearchedVideos = async () => {
    const data = await fetch(
      YOUTUBE_SEARCH_RESULT_VIDEOS + "&q=" + searchQuery + "&maxResults=100"
    );
    const json = await data.json();
    dispatch(addSearchVideos(json.items));
  };

  useEffect(() => {
    // dispatch(addOtherVideos([]));
    getSearchedVideos();
  });

  return <SearchVideoContainer />;
};

export default SearchPage;

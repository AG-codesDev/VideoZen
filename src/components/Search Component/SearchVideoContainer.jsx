import React from "react";
import { useSelector } from "react-redux";
import VideoCard2 from "./VideoCard2";
import SearchShimmer from "../Shimmer/SearchShimmer";

const SearchVideoContainer = () => {
  const searchVideos = useSelector((store) => store.app.searchVideos);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // console.log(searchVideos.length);

  if (searchVideos.length === 0) {
    return <SearchShimmer />;
  }

  return (
    <div className={` ${isMenuOpen ? "md:ml-56" : "md:ml-10"} px-2 mt-20`}>
      {searchVideos.map((video) => (
        <VideoCard2 video={video} key={video.id.videoId} />
      ))}
      {/* <SearchShimmer /> */}
    </div>
  );
};

export default SearchVideoContainer;

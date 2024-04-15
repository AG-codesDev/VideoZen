import React from "react";
import { useSelector } from "react-redux";
import VideoCard2 from "../Explore Menu/VideoCard2";

const SearchVideoContainer = () => {
  const searchVideos = useSelector((store) => store.app.searchVideos);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className={` ${isMenuOpen ? "ml-56" : "ml-20"} w-4/5 mt-20`}>
      {searchVideos.map((video) => (
        <VideoCard2 video={video} key={video.id.videoId} />
      ))}
    </div>
  );
};

export default SearchVideoContainer;

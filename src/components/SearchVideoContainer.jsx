import React from "react";
import { useSelector } from "react-redux";
import VideoCard2 from "./VideoCard2";
import { Link } from "react-router-dom";

const SearchVideoContainer = () => {
  const searchVideos = useSelector((store) => store.app.searchVideos);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className={` ${isMenuOpen ? "ml-56" : "ml-20"} w-4/5`}>
      {searchVideos.map((video) => (
        <Link
          to={"/watch?v=" + `${video.id.videoId}`}
          key={video.id.videoId || video.id.channelId}
        >
          <VideoCard2 video={video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchVideoContainer;

// try to create a different page for channels
// to visit a particular channel from searchpage we need to move link component to videocard2

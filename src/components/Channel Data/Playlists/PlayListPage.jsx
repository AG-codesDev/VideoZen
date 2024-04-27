import React, { useEffect, useState } from "react";
import { YOUTUBE_PLAYLIST_VIDEOS } from "../../../Utils/Constants";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

import PlaylistSideInfo from "./PlaylistSideInfo";
import PlayListVideos from "./PlayListVideos";

const PlayListPage = () => {
  const [allPlayListVideos, setAllPlayListVideos] = useState([]);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const isDarkModeActive = useSelector((store) => store.app.darkMode);

  const [searchParams] = useSearchParams();
  // const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const playListId = searchParams.get("id");

  const getPlayListVideos = async () => {
    const data = await fetch(
      YOUTUBE_PLAYLIST_VIDEOS + "&playlistId=" + playListId
    );
    const json = await data.json();
    setAllPlayListVideos(json.items);

    // console.log(json);
  };

  useEffect(() => {
    getPlayListVideos();
  }, []);

  // console.log(allPlayListVideos);
  if (allPlayListVideos.length === 0) {
    return "..";
  }

  return (
    <div
      className={` mt-14 py-2 flex flex-col lg:flex-row lg:gap-7 ${
        isMenuOpen ? "lg:ml-48" : "lg:ml-16"
      }`}
    >
      <PlaylistSideInfo />
      <div
        className={`${
          isDarkModeActive ? "bg-gray-900" : "bg-white"
        } flex h-full flex-col lg:mt-4`}
      >
        {allPlayListVideos.map((video) => (
          <PlayListVideos video={video} key={video.contentDetails.videoId} />
        ))}
      </div>
    </div>
  );
};

export default PlayListPage;

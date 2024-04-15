import React, { useEffect, useState } from "react";
import { YOUTUBE_PLAYLIST_VIDEOS } from "../../../ultils/Constants";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

import PlaylistSideInfo from "./PlaylistSideInfo";
import PlayListVideos from "./PlayListVideos";

const PlayListPage = () => {
  const [allPlayListVideos, setAllPlayListVideos] = useState([]);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

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
      className={` mt-20 flex gap-[25rem]  ${isMenuOpen ? "ml-52" : "ml-16"}`}
    >
      <PlaylistSideInfo />
      <div className="flex flex-col">
        {allPlayListVideos.map((video) => (
          <PlayListVideos video={video} key={video.contentDetails.videoId} />
        ))}
      </div>
    </div>
  );
};

export default PlayListPage;

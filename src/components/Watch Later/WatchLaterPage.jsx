import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import WatchLaterVideoCard from "./WatchLaterVideoCard";
import EmptyMessage from "./EmptyMessage";

const WatchLaterPage = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const isDarkModeActive = useSelector((store) => store.app.darkMode);
  const watchLaterVideos = useSelector(
    (store) => store.watchLater.watchLaterVideos
  );

  const [videos, setVideos] = useState();
  useEffect(() => {
    setVideos(watchLaterVideos);
  }, [watchLaterVideos]);

  if (watchLaterVideos.length === 0) {
    return <EmptyMessage />;
  }
  return (
    <div
      className={`${isMenuOpen ? "lg:ml-48" : ""} ${
        isDarkModeActive ? "bg-zinc-900" : "bg-white"
      } lg:mt-[4.5rem] mt-[3.9rem] py-2  px-2`}
    >
      <h1
        className={`${
          isDarkModeActive ? "text-white" : "text-black"
        } text-black font-bold text-xl ml-6 lg:ml-0`}
      >
        Watch Later
      </h1>
      {videos && (
        <div className={`${videos.length > 4 ? "h-full" : "h-[100vh]"}`}>
          {videos.map((videoId) => (
            <WatchLaterVideoCard videoId={videoId} key={videoId} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchLaterPage;

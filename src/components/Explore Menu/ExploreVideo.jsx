import React from "react";
import { useState, useEffect } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { YOUTUBE_CHANNEL_DATA } from "../../Utils/Constants";
import { useSelector } from "react-redux";
import { MdLibraryAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addWatchLaterVideos } from "../../Utils/WatchLaterSlice";

const ExploreVideos = ({ video }) => {
  const isDarkModeActive = useSelector((store) => store.app.darkMode);
  const [channelData, setChannelData] = useState([]);
  const [showWatchLater, setShowWatchLater] = useState(false);
  const dispatch = useDispatch();

  const getChannelLogo = async () => {
    const data = await fetch(
      YOUTUBE_CHANNEL_DATA + "&id=" + video.snippet.channelId
    );
    const json = await data.json();
    // console.log(json.items);
    setChannelData(json.items);
  };

  useEffect(() => {
    getChannelLogo();
  }, []);

  const handleWatchLaterIconClick = () => {
    setShowWatchLater(!showWatchLater);
    // console.log("Watch later icon clicked");
  };

  const addToWatchLater = (id) => {
    // console.log("Added to watch later");
    console.log(id.videoId);
    dispatch(addWatchLaterVideos(id.videoId));
    setShowWatchLater(false);
  };

  return (
    <div className="w-fit flex flex-col my-2 cursor-pointer">
      <Link to={`/watch?v=` + video.id.videoId} key={video.id.videoId}>
        <div className="imgbox mb-2">
          <img
            src={video.snippet.thumbnails.medium.url}
            alt=""
            className="rounded-xl hover:rounded-none transition-all w-[23rem]"
          />
        </div>
      </Link>
      <div className="title-views relative flex flex-col ">
        <div className="flex gap-2">
          <Link to={"/channelPage?id=" + video.snippet.channelId}>
            <img
              src={
                channelData.length > 0
                  ? channelData[0].snippet.thumbnails.high.url
                  : "none"
              }
              alt=""
              className="w-10 h-10 rounded-full"
            />
          </Link>

          <Link
            to={`/watch?v=` + video.id.videoId}
            key={video.id.videoId}
            className="title font-semibold w-72 h-12 overflow-hidden"
          >
            <span className={`${isDarkModeActive ? "text-white" : ""}`}>
              {video.snippet.title}
            </span>
          </Link>
          <span>
            <MdLibraryAdd
              className={`${
                isDarkModeActive
                  ? "text-white hover:bg-zinc-700"
                  : "text-black hover:bg-gray-200 "
              } -ml-3  rounded-full p-2 transition-all `}
              size={35}
              onClick={() => handleWatchLaterIconClick()}
            />
            {showWatchLater && (
              <span
                className={`${
                  isDarkModeActive
                    ? "bg-zinc-800 text-white  hover:bg-zinc-700"
                    : "bg-gray-200 text-black hover:bg-slate-300"
                } transition-all font-medium p-2 rounded-sm text-xs right-1 absolute`}
                onClick={() => addToWatchLater(video.id)}
              >
                Save to Watch Later
              </span>
            )}
          </span>
        </div>

        <div className="channelTitle-views-timePosted pl-12 mt-1">
          <span
            className={` ${
              isDarkModeActive ? "text-slate-200" : ""
            } flex items-center gap-1 text-gray-700`}
          >
            {video.snippet.channelTitle}{" "}
            <IoMdCheckmarkCircle className="mt-1" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExploreVideos;

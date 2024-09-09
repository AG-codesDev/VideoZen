import React, { useEffect, useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { YOUTUBE_CHANNEL_DATA } from "../../Utils/Constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdLibraryAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addWatchLaterVideos } from "../../Utils/WatchLaterSlice";

const VideoCard = ({ videoInfo }) => {
  const dispatch = useDispatch();
  // console.log(videoInfo);

  const [channelData, setChannelData] = useState([]);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const isDarkModeActive = useSelector((store) => store.app.darkMode);
  const [showWatchLater, setShowWatchLater] = useState(false);

  const { snippet, statistics } = videoInfo;
  // console.log();
  const { channelTitle, title, thumbnails, publishedAt, channelId } = snippet;
  const { id } = videoInfo;
  // console.log(id);

  const getChannelLogo = async () => {
    const data = await fetch(YOUTUBE_CHANNEL_DATA + "&id=" + channelId);
    const json = await data.json();
    // console.log(json.items);
    setChannelData(json.items);
  };

  useEffect(() => {
    getChannelLogo();
  }, []);

  let currentTime = new Date();
  let postedAt = new Date(publishedAt);

  let daysAgo = Math.ceil((currentTime - postedAt) / (1000 * 60 * 60 * 24));

  const days = (daysAgo) => {
    if (daysAgo < 30) {
      return daysAgo + " day";
    } else if (daysAgo > 30) {
      return Math.floor(daysAgo / 30) + " month";
    } else if (daysAgo > 365) {
      return Math.floor(daysAgo / 365) + " year";
    }
  };

  const handleWatchLaterIconClick = () => {
    setShowWatchLater(!showWatchLater);
    // console.log("Watch later icon clicked");
  };

  const addToWatchLater = (id) => {
    // console.log("Added to watch later");
    // console.log(id);
    dispatch(addWatchLaterVideos(id));
    setShowWatchLater(false);
  };

  return (
    <div
      className={`relative w-fit flex flex-col my-2 rounded-xl pb-2 cursor-pointer `}
    >
      <Link to={"/watch?v=" + `${id}`}>
        <div className="video-thumbnail mb-2">
          <img
            src={thumbnails.medium.url}
            alt=""
            className="rounded-xl hover:rounded-none transition-all lg:w-[22rem] w-[24rem]"
          />
        </div>
      </Link>

      <div className="title-views  items-baseline  flex flex-col ">
        <div className="flex gap-2">
          <Link to={"/channelPage?id=" + videoInfo.snippet.channelId}>
            <img
              src={
                channelData.length > 0
                  ? channelData[0].snippet.thumbnails.high.url
                  : "none"
              }
              alt=""
              className="channel-logo w-10 h-10 rounded-full"
            />
          </Link>
          <Link to={"/watch?v=" + `${id}`}>
            <div className="title  font-semibold  text-base w-[17.5rem] h-12 overflow-hidden">
              <span className={`${isDarkModeActive ? "text-white" : ""} `}>
                {title}
              </span>
            </div>
          </Link>

          <span>
            <MdLibraryAdd
              className={`${
                isDarkModeActive
                  ? "text-white hover:bg-zinc-700"
                  : "text-black hover:bg-gray-200 "
              } -ml-3  rounded-full p-2 transition-all relative`}
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
                onClick={() => addToWatchLater(id)}
              >
                Save to Watch Later
              </span>
            )}
          </span>
        </div>

        <div className=" channelTitle-views-timePosted pl-12">
          <Link to={"/channelPage?id=" + videoInfo.snippet.channelId}>
            <span
              className={` ${
                isDarkModeActive ? "text-slate-200" : "text-gray-700"
              } flex items-center gap-1 mt-1 `}
            >
              {channelTitle} <IoMdCheckmarkCircle className="mt-1" />
            </span>
          </Link>

          <span
            className={` ${
              isDarkModeActive ? "text-slate-200" : "text-gray-700"
            }  flex items-center`}
          >
            <span>
              {statistics
                ? (statistics.viewCount / 1000000).toFixed(1) + "M views"
                : null}
            </span>
            <GoDotFill className="text-black mt-1 mx-1 text-[0.5rem]" />
            <span>{days(daysAgo) + " ago"}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

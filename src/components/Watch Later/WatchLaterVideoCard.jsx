import React, { useEffect, useState } from "react";
import { YOUTUBE_WL_VIDEO_DETAILS } from "../../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeWatchLaterVideos } from "../../Utils/WatchLaterSlice";
import { SlOptionsVertical } from "react-icons/sl";

const WatchLaterVideoCard = ({ videoId }) => {
  const isDarkModeActive = useSelector((store) => store.app.darkMode);
  const dispatch = useDispatch();

  const [videoData, setVideoData] = useState([]);
  const [removeBtnActive, setRemoveBtnActive] = useState(false);

  const getVideoDetails = async () => {
    const data = await fetch(YOUTUBE_WL_VIDEO_DETAILS + "&id=" + videoId);
    const json = await data.json();
    // console.log(json);
    setVideoData(json.items[0]);
  };

  const handleMenuIconClick = () => {
    console.log("clicked");
    setRemoveBtnActive(!removeBtnActive);
  };
  useEffect(() => {
    getVideoDetails();
  }, []);

  const { snippet, id } = videoData;
  // console.log(snippet, id);

  const handleRemoveClick = (id) => {
    // console.log("Remove clicked");
    // console.log(id);
    dispatch(removeWatchLaterVideos(id));
  };

  return (
    snippet && (
      <div className=" flex relative  shadow-lg my-2 justify-between">
        <Link to={"/watch?v=" + id}>
          <div
            className={`${
              isDarkModeActive
                ? "text-white hover:bg-zinc-800 rounded-lg"
                : "hover:bg-gray-100 rounded-lg"
            } video-box items-center flex flex-col lg:flex-row gap-2 lg:gap-4 my-1 hover:cursor-pointer transition-all p-1`}
          >
            <div className=" lg:w-[20%]">
              <img
                src={snippet.thumbnails.medium.url}
                alt=""
                className=" lg:my-3 rounded-lg mx-auto"
              />
            </div>
            <div className="lg:w-[85%] w-[90%] p-1 gap-2 flex flex-col lg:gap-3">
              <p className="videoTitle lg:font-semibold text-medium lg:text-lg mt-2">
                {snippet.title}
              </p>
              <p className="ml-1 font-medium">{snippet.channelTitle}</p>
              <p className="text-sm  h-10 overflow-y-clip hidden lg:block">
                {snippet.description}
              </p>
            </div>
          </div>
        </Link>
        <span className="h-fit">
          <SlOptionsVertical
            className="mt-5 cursor-pointer"
            size={18}
            onClick={handleMenuIconClick}
          />

          {removeBtnActive && (
            <span
              className={`${
                isDarkModeActive
                  ? "bg-zinc-800 text-white  hover:bg-zinc-700"
                  : "bg-gray-200 text-black hover:bg-slate-300"
              } transition-all font-medium p-2 rounded-sm text-xs right-1 mt-2 cursor-pointer absolute`}
              onClick={() => handleRemoveClick(id)}
            >
              Remove
            </span>
          )}
        </span>
      </div>
    )
  );
};

export default WatchLaterVideoCard;

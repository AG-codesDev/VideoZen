import React from "react";
import { useState, useEffect } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { YOUTUBE_CHANNEL_DATA } from "../../ultils/Constants";

const ExploreVideos = ({ video }) => {
  // console.log(video.snippet);
  const [channelData, setChannelData] = useState([]);

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

  return (
    // <Link to={`/watch?v=` + video.id.videoId} key={video.id.videoId}>
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
      <div className="title-views flex flex-col ">
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
            <span>{video.snippet.title}</span>
          </Link>
        </div>

        <div className="channelTitle-views-timePosted pl-12 mt-1">
          <span className="flex items-center gap-1 text-gray-700">
            {video.snippet.channelTitle}{" "}
            <IoMdCheckmarkCircle className="mt-1" />
          </span>
        </div>
      </div>
    </div>
    // </Link>
  );
};

export default ExploreVideos;

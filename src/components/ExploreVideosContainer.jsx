import React from "react";
import { useSelector } from "react-redux";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const ExploreVideosContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const exploreVideos = useSelector((store) => store.app.exploreVideos);

  if (exploreVideos.length === 0) return <Shimmer />;

  return (
    <div
      className={`flex flex-wrap mt-5 gap-2 justify-evenly ${
        isMenuOpen ? "w-[88%] ml-[11.3rem]" : ""
      } px-2`}
    >
      {exploreVideos.map((video) => (
        <Link to={`/watch?v=` + video.id.videoId} key={video.id.videoId}>
          <div className="w-fit flex flex-col my-2 cursor-pointer">
            <div className="imgbox mb-2">
              <img
                src={video.snippet.thumbnails.medium.url}
                alt=""
                className="rounded-xl hover:rounded-none transition-all w-[23rem]"
              />
            </div>
            <div className="title-views flex flex-col ">
              <div className="flex gap-2">
                <img
                  src="https://cdn.pixabay.com/photo/2021/09/13/15/59/youtube-6621791_1280.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <span className="title font-semibold text-base w-72 h-12 overflow-hidden">
                  {video.snippet.title}
                </span>
              </div>

              <div className="channelTitle-views-timePosted pl-12 mt-1">
                <span className="flex items-center gap-1 font-semibold text-gray-700">
                  {video.snippet.channelTitle}{" "}
                  <IoMdCheckmarkCircle className="mt-1" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ExploreVideosContainer;

import React, { useEffect } from "react";
import { YOUTUBE_SHORTS_VIDEOS } from "../../ultils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addShortsVideos } from "../../ultils/appSlice";
import { Link } from "react-router-dom";

const ShortsPage = () => {
  const dispatch = useDispatch();

  const getShortsVideos = async () => {
    const data = await fetch(YOUTUBE_SHORTS_VIDEOS);
    const json = await data.json();
    dispatch(addShortsVideos(json.items));
  };
  const shortsVideos = useSelector((store) => store.app.shortsVideos);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  useEffect(() => {
    getShortsVideos();
  }, []);

  // getShortsVideos();
  return (
    <div
      className={`flex flex-wrap mt-5 gap-2 px-2 justify-evenly ${
        isMenuOpen ? "w-[88%] ml-[11.3rem]" : "ml-0 w-full gap-0"
      } px-2`}
    >
      {shortsVideos.map((video) => (
        <Link
          to={`/watch?v=` + video.id.videoId}
          className={` w-1/4 my-3 rounded-lg hover:bg-gray-100 transition-all  ${
            isMenuOpen ? "" : "px-5"
          }`}
          key={video.id.videoId}
        >
          <div className="imgBox">
            <img
              src={video.snippet.thumbnails.high.url}
              alt=""
              className="h-72 rounded-md"
            />
          </div>
          <div className="title overflow-hidden">
            <span className="font-semibold text-blue-800 ">
              {video.snippet.title}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ShortsPage;

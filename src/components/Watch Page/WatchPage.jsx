import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { VIDEO_DATA, YOUTUBE_COMMENTS_API } from "../../Utils/Constants";
import VideoFrame from "./VideoFrame";
import VideoData from "./VideoData";
import VideoDescription from "./VideoDescription";
import VideoComments from "./VideoComments";
import SideVideos from "./SideVideos";
import { YOUTUBE_SEARCH_RESULT_VIDEOS } from "../../Utils/Constants";
import WatchPageShimmer from "../Shimmer/WatchPageShimmer";

const WatchPage = () => {
  const [comments, setComments] = useState([]);
  const [videoData, setVideoData] = useState([]);
  const [sideVideos, setSideVideos] = useState([]);
  const [videoTitle, setVideoTitle] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const getComments = async () => {
    const data = await fetch(
      YOUTUBE_COMMENTS_API +
        `&textFormat=plainText&part=snippet&videoId=${videoId}&maxResults=50`
    );
    const json = await data.json();

    setComments(json.items);
  };

  const getVideoData = async () => {
    const data = await fetch(VIDEO_DATA + "&id=" + videoId);
    const json = await data.json();

    setVideoData(json.items[0]);
    setVideoTitle(json.items[0].snippet.tags[0]);
  };

  const getSideVideo = async () => {
    const data = await fetch(
      YOUTUBE_SEARCH_RESULT_VIDEOS + "&q=" + videoTitle + "&maxResults=100"
    );
    const json = await data.json();
    setSideVideos(json.items);
  };

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const isDarkModeActive = useSelector((store) => store.app.darkMode);

  const { snippet, statistics } = videoData;

  useEffect(() => {
    getComments();
    getVideoData();
  }, [videoId]);

  useEffect(() => {
    getSideVideo();
  }, [videoTitle]);

  if (sideVideos.length === 0) {
    return <WatchPageShimmer />;
  }

  return (
    <div
      className={` ${
        isDarkModeActive ? "bg-gray-900" : ""
      } flex flex-col lg:flex-row lg:py-3 mt-14 ${
        isMenuOpen ? "lg:ml-48" : "lg:ml-10"
      }`}
    >
      <div className=" lg:w-[90%] mx-1">
        <VideoFrame videoId={videoId} />
        <VideoData snippet={snippet} statistics={statistics} />
        <VideoDescription data={{ snippet }} />
        {comments.length > 0 ? (
          <VideoComments data={{ comments, snippet, statistics }} />
        ) : (
          ""
        )}
      </div>
      <div className="mt-3 px-1">
        <h1 className="lg:ml-7 font-semibold text-lg">Related Videos</h1>
        {sideVideos.map((video) => (
          <SideVideos video={video} key={video.id.videoId} />
        ))}
      </div>
    </div>
    // <WatchPageShimmer />
  );
};

export default WatchPage;

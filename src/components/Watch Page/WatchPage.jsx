import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../../ultils/appSlice";
import { useSearchParams } from "react-router-dom";
import { VIDEO_DATA, YOUTUBE_COMMENTS_API } from "../../ultils/Constants";
import VideoFrame from "./VideoFrame";
import VideoData from "./VideoData";
import VideoDescription from "./VideoDescription";
import VideoComments from "./VideoComments";

const WatchPage = () => {
  const [comments, setComments] = useState([]);
  const [videoData, setVideoData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const showFull = (e) => {
    e.target.classList.remove("h-20");
  };
  const showLess = (e) => {
    e.target.parentElement.classList.add("h-20");
  };

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  console.log(videoId);

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
    // console.log(json.items[0]);
    setVideoData(json.items[0]);
  };

  // const { channelId } = videoData.snippet;
  // console.log(channelId);

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // if (channelData.length == 0) {
  //   return "..";
  // }
  const { snippet, statistics } = videoData;
  // console.log(snippet);

  useEffect(() => {
    getComments();
    getVideoData();
  }, []);

  if (comments.length == 0) return "";
  return (
    <div className={`w-[73%]  mt-20 ${isMenuOpen ? "ml-52" : "ml-16"}`}>
      <VideoFrame videoId={videoId} />
      <VideoData snippet={snippet} statistics={statistics} />
      <VideoDescription data={{ snippet, showFull, showLess }} />
      {comments.length > 0 ? (
        <VideoComments data={{ comments, snippet, statistics }} />
      ) : (
        ""
      )}
    </div>
  );
};

export default WatchPage;

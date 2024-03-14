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
  const [channelData, setChannelData] = useState([]);
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

  const getComments = async () => {
    const data = await fetch(
      YOUTUBE_COMMENTS_API +
        `&textFormat=plainText&part=snippet&videoId=${videoId}&maxResults=100`
    );
    const json = await data.json();
    setComments(json.items);
  };

  const getchannelData = async () => {
    const data = await fetch(VIDEO_DATA + "&id=" + videoId);
    const json = await data.json();
    setChannelData(json.items[0]);
  };
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const { snippet, statistics } = channelData;

  useEffect(() => {
    getComments();
    getchannelData();
  }, []);

  if (comments.length == 0) return ".....";
  return (
    <div className={`w-[73%] ${isMenuOpen ? "ml-52" : "ml-16"}`}>
      <VideoFrame videoId={videoId} />
      <VideoData snippet={snippet} statistics={statistics} />
      <VideoDescription data={{ snippet, showFull, showLess }} />
      <VideoComments data={{ comments, snippet, statistics }} />
    </div>
  );
};

export default WatchPage;

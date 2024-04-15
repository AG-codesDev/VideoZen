import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../../ultils/appSlice";
import { useSearchParams } from "react-router-dom";
import { VIDEO_DATA, YOUTUBE_COMMENTS_API } from "../../ultils/Constants";
import VideoFrame from "./VideoFrame";
import VideoData from "./VideoData";
import VideoDescription from "./VideoDescription";
import VideoComments from "./VideoComments";
import SideVideos from "./SideVideos";
import { YOUTUBE_SEARCH_RESULT_VIDEOS } from "../../ultils/Constants";

const WatchPage = () => {
  const [comments, setComments] = useState([]);
  const [videoData, setVideoData] = useState([]);
  const [sideVideos, setSideVideos] = useState([]);
  const [videoTitle, setVideoTitle] = useState("");

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
  // console.log(videoId);

  const getComments = async () => {
    const data = await fetch(
      YOUTUBE_COMMENTS_API +
        `&textFormat=plainText&part=snippet&videoId=${videoId}&maxResults=100`
    );
    const json = await data.json();

    setComments(json.items);
  };
  // console.log(comments);
  // if (videoData.length === 0) {
  //   return <div>holy shit</div>;
  // }

  const getVideoData = async () => {
    const data = await fetch(VIDEO_DATA + "&id=" + videoId);
    const json = await data.json();
    // console.log(json.items[0]);

    setVideoData(json.items[0]);
    setVideoTitle(json.items[0].snippet.tags[0]);
  };

  const getSideVideo = async () => {
    const data = await fetch(
      YOUTUBE_SEARCH_RESULT_VIDEOS + "&q=" + videoTitle + "&maxResults=100"
    );
    const json = await data.json();
    // console.log(json);
    setSideVideos(json.items);
  };

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const { snippet, statistics } = videoData;

  useEffect(() => {
    getComments();
    getVideoData();
  }, [videoId]);

  useEffect(() => {
    getSideVideo();
  }, [videoTitle]);

  // console.log(sideVideos);
  if (sideVideos.length === 0) {
    return "...";
  }

  if (comments.length == 0) return "";
  return (
    <div className={` flex mt-14 mr-5 ${isMenuOpen ? "ml-48" : "ml-16"}`}>
      <div className="w-[59%]">
        <VideoFrame videoId={videoId} />
        <VideoData snippet={snippet} statistics={statistics} />
        <VideoDescription data={{ snippet, showFull, showLess }} />
        {comments.length > 0 ? (
          <VideoComments data={{ comments, snippet, statistics }} />
        ) : (
          ""
        )}
      </div>
      <div className="ml-10">
        {sideVideos.map((video) => (
          <SideVideos video={video} key={video.id.videoId} />
        ))}
      </div>
    </div>
  );
};

export default WatchPage;

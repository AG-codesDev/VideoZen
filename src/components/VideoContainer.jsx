import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../ultils/Constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../ultils/appSlice";

const VideoContainer = () => {
  // const [videos, setvideos] = useState([]);
  const videos = useSelector((store) => store.app.videos);
  const dispatch = useDispatch();

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    // setvideos(json.items);
    dispatch(addVideos(json.items));
    // console.log(json.items);
  };

  if (videos.length == 0) return "wait....";

  return (
    <div className="flex flex-wrap mt-5 justify-evenly px-2">
      {videos.map((video) => (
        <Link
          to={"/watch?v=" + `${video.id.videoId || video.id}`}
          key={video.id.videoId || video.id}
          videoinfo={video}
        >
          <VideoCard videoInfo={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;

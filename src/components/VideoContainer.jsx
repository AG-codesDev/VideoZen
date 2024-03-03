import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../ultils/Constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    getVideos();
    videoBySearch();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    // console.log(json.items);
    setvideos(json.items);
  };

  const videoBySearch = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=viratkohli&key=AIzaSyCqMRpPSphMIZPI8EDB-BJ-6v-j7CX9fNw"
    );
    const json = await data.json();
    console.log(json.items);
  };

  if (videos.length == 0) return "wait....";

  return (
    <div className="flex flex-wrap mt-5 justify-evenly px-2">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id} videoinfo={video}>
          <VideoCard videoInfo={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;

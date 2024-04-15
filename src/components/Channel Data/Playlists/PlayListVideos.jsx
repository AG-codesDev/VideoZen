import React from "react";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";

const PlayListVideos = ({ video }) => {
  // console.log(video);

  let currentTime = new Date();
  let postedAt = new Date(video.snippet.publishedAt);
  // console.log(Math.ceil((currentTime - postedAt) / (1000 * 60 * 60 * 24)));
  // Math.ceil((currentTime - postedAt) / (1000 * 60 * 60 * 24));

  return (
    <Link to={"/watch?v=" + video.contentDetails.videoId}>
      <div className="video-box  my-2 flex gap-4 w-[56rem] hover:bg-gray-100  transition-all">
        <span className="self-center my-4 font-semibold">
          {video.snippet.position + 1}
        </span>
        <div className="w-20%">
          <img
            src={video.snippet.thumbnails.medium.url}
            alt=""
            className="my-3 rounded-lg h-36 w-56"
          />
        </div>
        <div className="w-[65%] flex flex-col gap-3">
          <p className="videoTitle font-semibold text-lg mt-2">
            {video.snippet.title}
          </p>
          <p className="ml-1">{video.snippet.channelTitle}</p>
          <p className="text-sm  h-10 overflow-y-clip">
            {video.snippet.description}
          </p>
          {/* <GoDotFill className="text-black mt-1 mx-1 text-[0.5rem]" /> */}

          {/* <p>{Math.ceil((currentTime - postedAt) / (1000 * 60 * 60 * 24))}</p> */}
        </div>
      </div>
    </Link>
  );
};

export default PlayListVideos;

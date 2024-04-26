import React from "react";
import { Link } from "react-router-dom";
import { RiPlayListAddFill } from "react-icons/ri";

const PlaylistCard = ({ playlist }) => {
  // console.log(playlist);
  return (
    <Link to={"/playlistPage?id=" + playlist.id} state={playlist} className="">
      <div className="flex flex-row md:flex-col w-fit transition-all hover:scale-105 gap-2 hover:cursor-pointer">
        <img
          src={playlist.snippet.thumbnails.medium.url}
          alt=""
          className="h-40 md:h-48 w-[50%] md:w-[90%] rounded-md"
        />
        <div className="w-72 mt-2 md:mt-0">
          <span className="overflow-hidden text-sm md:text-lg ">
            {playlist.snippet.title}
          </span>
          <span className="italic flex mt-1 items-center gap-2">
            <RiPlayListAddFill /> {playlist.contentDetails.itemCount + " "}{" "}
            videos
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PlaylistCard;

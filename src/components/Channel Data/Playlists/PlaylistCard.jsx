import React from "react";
import { Link } from "react-router-dom";
import { RiPlayListAddFill } from "react-icons/ri";

const PlaylistCard = ({ playlist }) => {
  // console.log(playlist);
  return (
    <Link to={"/playlistPage?id=" + playlist.id} state={playlist}>
      <div className="flex flex-col w-72 transition-all hover:scale-110 hover:cursor-pointer hover:bg-gray-100 ">
        <img
          src={playlist.snippet.thumbnails.medium.url}
          alt=""
          className="h-48 w-72 rounded-lg"
        />
        <span className="font-semibold overflow-hidden ">
          {playlist.snippet.title}
        </span>
        <span className="italic font-semibold flex mt-1 items-center gap-2">
          <RiPlayListAddFill /> {playlist.contentDetails.itemCount + " "} videos
        </span>
      </div>
    </Link>
  );
};

export default PlaylistCard;

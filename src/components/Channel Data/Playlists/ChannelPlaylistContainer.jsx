import React, { useEffect, useState } from "react";
import { YOUTUBE_CHANNEL_PLAYLIST } from "../../../ultils/Constants";
import PlaylistCard from "./PlaylistCard";
import { RiPlayList2Line } from "react-icons/ri";

const ChannelPlaylistContainer = ({ channelData }) => {
  // console.log(channelData);
  const [allplaylist, setAllPlaylist] = useState([]);
  const getChannelPlaylist = async () => {
    const data = await fetch(
      YOUTUBE_CHANNEL_PLAYLIST + "&channelId=" + channelData.id
    );
    const json = await data.json();
    setAllPlaylist(json.items);
    // console.log(json.items);
  };
  useEffect(() => {
    getChannelPlaylist();
  }, []);
  return (
    <>
      <h1 className="ml-6 mt-5 flex bg-slate-200 text-black p-2 rounded-lg w-fit items-center gap-2 font-semibold text-xl">
        <span>Playlists</span>
        <span>
          <RiPlayList2Line className="mt-1" />
        </span>
      </h1>
      <div className="flex flex-wrap w-full gap-7 p-6">
        {allplaylist.map((playlist) => (
          <PlaylistCard playlist={playlist} key={playlist.id} />
        ))}
      </div>
    </>
  );
};

export default ChannelPlaylistContainer;

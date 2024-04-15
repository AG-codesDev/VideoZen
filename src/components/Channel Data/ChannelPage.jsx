import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_CHANNEL_DATA } from "../../ultils/Constants";
import ChannelDetails from "./ChannelDetails";
import ChannelPlaylistContainer from "./Playlists/ChannelPlaylistContainer";
import { useSelector } from "react-redux";

const ChannelPage = () => {
  const [searchParams] = useSearchParams();
  const channelId = searchParams.get("id");
  // console.log(channelId);
  const [channelData, setChannelData] = useState([]);
  const getChannelData = async () => {
    const data = await fetch(YOUTUBE_CHANNEL_DATA + "&id=" + channelId);
    const json = await data.json();
    setChannelData(json.items[0]);
  };
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  useEffect(() => {
    getChannelData();
  }, []);

  if (channelData.length === 0) {
    return "...";
  }
  // console.log(channelData);

  return (
    <div className={`flex flex-col mt-5 ${isMenuOpen ? "ml-52" : "ml-16"}`}>
      <ChannelDetails channelData={channelData} />
      <ChannelPlaylistContainer channelData={channelData} />
    </div>
  );
};

export default ChannelPage;

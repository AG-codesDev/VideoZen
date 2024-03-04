import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";

const MenuItems = () => {
  const [homePage, setHomePage] = useState(false);
  const makeHome = () => {
    setHomePage(!homePage);
  };

  return (
    <div className="flex flex-col h-screen w-48 pl-3 pt-3 gap-5">
      <div>
        <ul className="flex flex-col gap-2">
          <Link to={"/"}>
            <li
              className={`flex gap-3 items-center font-normal hover:bg-gray-100 p-2 ${
                homePage ? "bg-gray-100" : "bg-white"
              } rounded-md`}
              onClick={makeHome}
            >
              <MdHomeFilled className="text-xl" />
              Home
            </li>
          </Link>
          <Link to={"/"}>
            <li className="flex gap-3 items-center font-normal hover:bg-gray-100 p-2 rounded-md">
              <SiYoutubeshorts />
              Shorts
            </li>
          </Link>
          <Link to={"/"}>
            <li className="flex gap-3 items-center font-normal hover:bg-gray-100 p-2 rounded-md">
              <MdOutlineSubscriptions />
              Subsriptions
            </li>
          </Link>
        </ul>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="font-bold ">You</h2>
        <ul>
          <li>Your Channel</li>
          <li>History</li>
          <li>Your Videos</li>
          <li>Watch Later</li>
          <li>Liked Videos</li>
        </ul>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="font-bold ">Explore</h2>
        <ul>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Films</li>
          <li>Live</li>
        </ul>
      </div>
    </div>
  );
};

export default MenuItems;

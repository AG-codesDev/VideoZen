import React from "react";
import { Link } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";

const MenuItems = () => {
  return (
    <div className="flex flex-col h-screen w-48 pl-6 pt-3 gap-5">
      <div>
        <ul className="flex flex-col gap-4">
          <Link to={"/"}>
            <li className="flex gap-2 items-center font-semibold">
              <MdHomeFilled className="text-xl" />
              Home
            </li>
          </Link>
          <li className="flex gap-2 items-center font-semibold">
            <SiYoutubeshorts />
            Shorts
          </li>
          <li className="flex gap-2 items-center font-semibold">
            <MdOutlineSubscriptions />
            Subsriptions
          </li>
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

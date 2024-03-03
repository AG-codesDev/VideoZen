import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";
import { RiVideoAddFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../ultils/appSlice";
import { YOUTUBE_SEARCH_API } from "../ultils/Constants";
import { CiSearch } from "react-icons/ci";

const Heading = () => {
  const [suggestions, setSuggestions] = useState();
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const handleHamburgerClick = () => {
    dispatch(toggleMenu());
  };

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    let timer = setTimeout(() => {
      getSuggestions();
    }, 300);

    return () => clearTimeout(timer);
  }, [searchText]);

  const getSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchText);
    const result = await data.json();
    setSuggestions(result[1]);
    // console.log(result[1]);
  };

  return (
    <div className="flex flex-col m-3 justify-between p-1">
      <div className="headeronly flex justify-between">
        <div className="logo-hamburger flex items-center mx-2 gap-4">
          <RxHamburgerMenu
            className="text-4xl cursor-pointer hover:bg-gray-200 rounded-full p-2 transition-all"
            onClick={() => handleHamburgerClick()}
          />
          <img
            src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"
            alt=""
            className="w-24 h-6 cursor-pointer"
          />
        </div>
        <div className="searchBar-voiceassistant flex w-[45%] items-center justify-center">
          <input
            type="text"
            placeholder="Search"
            className="border-2 border-gray-300 w-full rounded-l-full py-[0.4rem] px-3"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <IoIosSearch className=" bg-gray-200 text-[2.5rem] py-1 px-2 rounded-r-full" />
          <MdKeyboardVoice className=" bg-gray-200 text-[2.5rem] p-2 ml-5 rounded-full" />
        </div>
        <div className="videoadd-notification-user justify-around flex items-center gap-6">
          <RiVideoAddFill className="text-[1.4rem]" />
          <IoIosNotificationsOutline className="text-[1.4rem]" />
          <FaUserCircle className="text-[1.4rem]" />
        </div>
      </div>

      <div className="suggestions w-[36rem] ml-[27rem] rounded-xl shadow-xl px-1 absolute bg-gray-100 top-14">
        {showSuggestions &&
          suggestions.map((suggestion) => (
            <p
              key={suggestion}
              className="my-2 p-2 hover:bg-gray-200 hover:cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <CiSearch className="mt-1" />
                {suggestion}
              </span>
            </p>
          ))}
      </div>
    </div>
  );
};

export default Heading;

import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";
import { RiVideoAddFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";
import { toggleMenu } from "../ultils/appSlice";
import { YOUTUBE_SUGGESTION_API } from "../ultils/Constants";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";

const Heading = () => {
  const [suggestions, setSuggestions] = useState();
  const [showSuggestion, setShowSuggestion] = useState();
  const navigate = useNavigate();

  // const isSuggestionOpen = useSelector((store) => store.app.isSuggestionOpen);
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
    const data = await fetch(YOUTUBE_SUGGESTION_API + "&q=" + searchText);
    const result = await data.json();
    setSuggestions(result[1]);
  };

  const handleClick = async (e) => {
    // dispatch(toggleSuggestion(false));
    setShowSuggestion(false);
    setSearchText(e.target.innerText);
  };

  const onSearchBtnClick = async () => {
    if (searchText !== "") {
      navigate(`/search?result=` + searchText);
      // dispatch(toggleSuggestion(false));
      setShowSuggestion(false);
    }
  };
  const handleEnter = async (e) => {
    if (e.key === "Enter" && searchText !== "") {
      navigate(`/search?result=` + searchText);
      // dispatch(toggleSuggestion(false));
      setShowSuggestion(false);
    }
  };

  return (
    <div className="flex flex-col justify-between p-3  fixed top-0 mb-4 w-full z-10 bg-white">
      <div className="headeronly flex justify-between w-full">
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
            className="border-2 border-gray-300 w-full  rounded-l-full py-[0.4rem] px-3"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onKeyDown={(e) => handleEnter(e)}
            // onClick={() => setShowSuggestion(true)}
          />
          <IoIosSearch
            className=" bg-gray-200 text-[2.5rem] py-1 px-2 rounded-r-full hover:cursor-pointer active:bg-black active:text-white transition-all"
            onClick={onSearchBtnClick}
          />
          <MdKeyboardVoice className=" bg-gray-200 text-[2.5rem] p-2 ml-5 rounded-full" />
        </div>
        <div className="videoadd-notification-user justify-around flex items-center gap-6">
          <RiVideoAddFill className="text-[1.4rem]" />
          <IoIosNotificationsOutline className="text-[1.4rem]" />
          <FaUserCircle className="text-[1.4rem]" />
        </div>
      </div>

      <div
        className="suggestions w-[35rem] ml-[28rem] rounded-xl shadow-xl px-1 absolute bg-white top-14"
        // onTouchMove={setShowSuggestion(true)}
      >
        {showSuggestion &&
          suggestions.map((suggestion) => (
            <Link
              to={`/search?result=` + suggestion}
              onClick={handleClick}
              key={suggestion}
            >
              <p className="my-2 p-2 hover:bg-gray-100 hover:cursor-pointer">
                <span className="flex items-center gap-2">
                  <CiSearch className="mt-1" />
                  {suggestion}
                </span>
              </p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Heading;

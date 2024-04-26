import React, { useEffect, useState, useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";
import { RiVideoAddFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { toggleMenu } from "../../Utils/appSlice";
import { YOUTUBE_SUGGESTION_API } from "../../Utils/Constants";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
const Heading = () => {
  const [suggestions, setSuggestions] = useState([]);
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

  const handleSuggestionClick = async (e) => {
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

  const handleEnterPress = async (e) => {
    if (e.key === "Enter" && searchText !== "") {
      navigate(`/search?result=` + searchText);
      // dispatch(toggleSuggestion(false));
      setShowSuggestion(false);
    }
  };
  const InputElement = useRef();
  const hamBurger = useRef();
  const Icon = useRef();
  const handleSmallSearchClick = () => {
    InputElement.current.classList.toggle("hidden");
    InputElement.current.classList.add("flex");
    hamBurger.current.classList.remove("hidden");
    Icon.current.classList.toggle("hidden");
    // console.log(hamBurger);
  };

  return (
    <div className="flex flex-col p-3 shadow-md justify-between lg:p-3 fixed top-0 mb-4 w-full z-10 bg-white">
      <div className="headeronly flex justify-between w-full">
        <div className="logo-hamburger flex items-center ">
          <div ref={hamBurger}>
            <GiHamburgerMenu
              className="text-4xl cursor-pointer lg:hover:bg-gray-200 rounded-full font-extrabold p-2 lg:mr-4 transition-all"
              onClick={() => handleHamburgerClick()}
            />
          </div>
          <div className="flex" ref={Icon}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/5667/5667341.png"
              alt=""
              className=" h-8 lg:h-10  cursor-pointer"
            />
            <span className="font-LilitaOne lg:text-2xl text-xl mt-1">
              VideoZen
            </span>
          </div>
        </div>
        <div
          className="searchBar-voiceassistant lg:flex lg:w-1/2 items-center hidden justify-center"
          ref={InputElement}
        >
          <input
            type="text"
            placeholder="Search"
            className="border-2 border-gray-300 w-full rounded-l-full py-[0.4rem] px-3"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onKeyDown={(e) => handleEnterPress(e)}
            onMouseEnter={() => setShowSuggestion(true)}
            onMouseLeave={() => setShowSuggestion(false)}
          />
          <IoIosSearch
            className=" bg-gray-200 text-[2.5rem] py-1 px-2 rounded-r-full hover:cursor-pointer active:bg-black active:text-white transition-all"
            onClick={onSearchBtnClick}
          />
          <MdKeyboardVoice className=" bg-gray-200 text-[2.5rem] p-2 ml-5 rounded-full hidden lg:block" />
        </div>
        <div className="videoadd-notification-user justify-around flex items-center gap-6">
          <RiVideoAddFill className="text-[1.4rem] hidden lg:block" />
          <IoIosNotificationsOutline className="text-[1.4rem] hidden lg:block" />
          <FaUserCircle className="text-[1.4rem] hidden lg:block" />
          <FaSearch
            className=" text-xl mr-2 lg:hidden"
            onClick={handleSmallSearchClick}
          />
        </div>
      </div>

      <div
        className="suggestions ml-[26rem] hidden lg:block w-[40.5rem] shadow-xl px-1 absolute bg-white top-12"
        onMouseLeave={() => setShowSuggestion(false)}
        onMouseEnter={() => setShowSuggestion(true)}
      >
        {showSuggestion &&
          suggestions.map((suggestion) => (
            <Link
              to={`/search?result=` + suggestion}
              onClick={handleSuggestionClick}
              key={suggestion}
              // onFocus={() => setShowSuggestion(true)}
              // onMouseOut={() => setShowSuggestion(false)}
            >
              <p className="my-2 p-2 hover:bg-gray-100 hover:cursor">
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

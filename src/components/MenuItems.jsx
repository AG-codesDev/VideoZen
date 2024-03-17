import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { IoMdTrendingUp } from "react-icons/io";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { PiFilmSlateBold } from "react-icons/pi";
import { FaRegNewspaper } from "react-icons/fa6";
import { GoTrophy } from "react-icons/go";
import { IoGameController } from "react-icons/io5";
import { MdPodcasts } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";

const MenuItems = () => {
  const [homeTabActive, setHomeTabActive] = useState(true);
  const [shortsTabActive, setShortsTabActive] = useState(false);

  const [trendingTabActive, setTrendingTabActive] = useState(false);
  const [musicTabActive, setMusicTabActive] = useState(false);
  const [filmsTabActive, setFilmsTabActive] = useState(false);
  const [gamingTabActive, setGamingTabActive] = useState(false);
  const [newsTabActive, setNewsTabActive] = useState(false);
  const [sportsTabActive, setSportsTabActive] = useState(false);
  const [podcastTabActive, setPodcastTabActive] = useState(false);
  const [codingTabActive, setCodingTabActive] = useState(false);
  const [iplTabActive, setIplTabActive] = useState(false);

  const navigate = useNavigate();

  const hanldeMenuItemClick = (e) => {
    // console.log(e.target.innerText);
    let path = e.target.innerText;

    if (path === "Shorts") {
      navigate(`/explore?category=${path}`);
      setShortsTabActive(true);

      setHomeTabActive(false);
      setTrendingTabActive(false);
      setMusicTabActive(false);
      setFilmsTabActive(false);
      setGamingTabActive(false);
      setNewsTabActive(false);
      setSportsTabActive(false);
      setPodcastTabActive(false);
      setCodingTabActive(false);
      setIplTabActiveTabActive(false);
    } else if (path === "Trending") {
      navigate(`/explore?category=${path}`);
      setTrendingTabActive(true);

      setHomeTabActive(false);
      setShortsTabActive(false);
      setMusicTabActive(false);
      setFilmsTabActive(false);
      setGamingTabActive(false);
      setNewsTabActive(false);
      setSportsTabActive(false);
      setPodcastTabActive(false);
      setCodingTabActive(false);
      setIplTabActiveTabActive(false);
    } else if (path === "Music") {
      navigate(`/explore?category=${path}`);
      setMusicTabActive(true);

      setHomeTabActive(false);
      setShortsTabActive(false);
      setTrendingTabActive(false);
      setFilmsTabActive(false);
      setGamingTabActive(false);
      setNewsTabActive(false);
      setSportsTabActive(false);
      setPodcastTabActive(false);
      setCodingTabActive(false);
      setIplTabActiveTabActive(false);
    } else if (path === "Films") {
      navigate(`/explore?category=${path}`);
      setFilmsTabActive(true);

      setHomeTabActive(false);
      setShortsTabActive(false);
      setTrendingTabActive(false);
      setMusicTabActive(false);
      setGamingTabActive(false);
      setNewsTabActive(false);
      setSportsTabActive(false);
      setPodcastTabActive(false);
      setCodingTabActive(false);
      setIplTabActiveTabActive(false);
    } else if (path === "Gaming") {
      navigate(`/explore?category=${path}`);
      setGamingTabActive(true);

      setHomeTabActive(false);
      setShortsTabActive(false);
      setTrendingTabActive(false);
      setMusicTabActive(false);
      setFilmsTabActive(false);
      setNewsTabActive(false);
      setSportsTabActive(false);
      setPodcastTabActive(false);
      setCodingTabActive(false);
      setIplTabActiveTabActive(false);
    } else if (path === "News") {
      navigate(`/explore?category=${path}`);
      setNewsTabActive(true);

      setHomeTabActive(false);
      setShortsTabActive(false);
      setTrendingTabActive(false);
      setMusicTabActive(false);
      setFilmsTabActive(false);
      setGamingTabActive(false);
      setSportsTabActive(false);
      setPodcastTabActive(false);
      setCodingTabActive(false);
      setIplTabActiveTabActive(false);
    } else if (path === "Sports") {
      navigate(`/explore?category=${path}`);
      setSportsTabActive(true);

      setHomeTabActive(false);
      setShortsTabActive(false);
      setTrendingTabActive(false);
      setMusicTabActive(false);
      setFilmsTabActive(false);
      setGamingTabActive(false);
      setNewsTabActive(false);
      setPodcastTabActive(false);
      setCodingTabActive(false);
      setIplTabActiveTabActive(false);
    } else if (path === "Podcasts") {
      navigate(`/explore?category=${path}`);
      setPodcastTabActive(true);

      setHomeTabActive(false);
      setShortsTabActive(false);
      setTrendingTabActive(false);
      setMusicTabActive(false);
      setFilmsTabActive(false);
      setGamingTabActive(false);
      setSportsTabActive(false);
      setNewsTabActive(false);
      setCodingTabActive(false);
      setIplTabActiveTabActive(false);
    } else if (path === "Coding") {
      navigate(`/explore?category=${path}`);
      setCodingTabActive(true);

      setHomeTabActive(false);
      setShortsTabActive(false);
      setTrendingTabActive(false);
      setMusicTabActive(false);
      setFilmsTabActive(false);
      setGamingTabActive(false);
      setSportsTabActive(false);
      setNewsTabActive(false);
      setPodcastTabActive(false);
      setIplTabActiveTabActive(false);
    } else if (path === "IPL") {
      navigate(`/explore?category=${path}`);
      setIplTabActive(true);

      setHomeTabActive(false);
      setShortsTabActive(false);
      setTrendingTabActive(false);
      setMusicTabActive(false);
      setFilmsTabActive(false);
      setGamingTabActive(false);
      setSportsTabActive(false);
      setNewsTabActive(false);
      setPodcastTabActive(false);
      setCodingTabActive(false);
    }
  };
  const handleHomeClick = () => {
    navigate("/");
    setHomeTabActive(true);

    setShortsTabActive(false);
    setTrendingTabActive(false);
    setMusicTabActive(false);
    setFilmsTabActive(false);
    setGamingTabActive(false);
    setNewsTabActive(false);
    setSportsTabActive(false);
    setPodcastTabActive(false);
    setCodingTabActive(false);
    setIplTabActiveTabActive(false);
  };
  //  showSidebar ? "translate-x-0 " : "translate-x-full"
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`flex flex-col gap-7 z-10 h-full ease-in-out duration-300 fixed top-16 rounded-lg ml-1 ${
        isMenuOpen ? "translate-x-0" : "-translate-x-48"
      } bg-white `}
    >
      <div className="flex flex-col pl-3 gap-5 mt-0.5 w-44 ">
        <div className="">
          <ul className="flex flex-col gap-2">
            <li
              className={`flex gap-3 items-center font-semibold hover:cursor-pointer ${
                homeTabActive ? "text-red-600 underline" : ""
              } hover:bg-gray-100 p-2 rounded-md`}
              onClick={(e) => handleHomeClick()}
            >
              <MdHomeFilled className="text-xl" />
              Home
            </li>

            <li
              className={`flex gap-3 items-center font-semibold hover:cursor-pointer ${
                shortsTabActive ? "text-red-600 underline" : ""
              } hover:bg-gray-100 p-2 rounded-md`}
              onClick={(e) => hanldeMenuItemClick(e)}
            >
              <SiYoutubeshorts />
              Shorts
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <ul className="flex flex-col gap-5">
            <li
              className={`flex gap-3 items-center font-medium hover:cursor-pointer ${
                trendingTabActive ? "text-red-600 underline" : ""
              } hover:bg-gray-100 p-2 rounded-md`}
              onClick={(e) => hanldeMenuItemClick(e)}
            >
              <IoMdTrendingUp className="text-lg" />
              Trending
            </li>
            <li
              className={`flex gap-3 items-center font-medium hover:cursor-pointer ${
                musicTabActive ? "text-red-700 underline" : ""
              } hover:bg-gray-100 p-2 rounded-md`}
              onClick={(e) => hanldeMenuItemClick(e)}
            >
              <IoMusicalNoteOutline className="text-lg" />
              Music
            </li>

            <li
              className={`flex gap-3 items-center font-medium hover:cursor-pointer ${
                filmsTabActive ? "text-red-700 underline" : ""
              } hover:bg-gray-100 p-2 rounded-md`}
              onClick={(e) => hanldeMenuItemClick(e)}
            >
              <PiFilmSlateBold className="text-lg" />
              Films
            </li>

            <li
              className={`flex gap-3 items-center font-medium hover:cursor-pointer ${
                gamingTabActive ? "text-red-700 underline" : ""
              } hover:bg-gray-100 p-2 rounded-md`}
              onClick={(e) => hanldeMenuItemClick(e)}
            >
              <IoGameController className="text-lg" />
              Gaming
            </li>
            <li
              className={`flex gap-3 items-center font-medium hover:cursor-pointer ${
                newsTabActive ? "text-red-700 underline" : ""
              } hover:bg-gray-100 p-2 rounded-md`}
              onClick={(e) => hanldeMenuItemClick(e)}
            >
              <FaRegNewspaper className="text-lg" />
              News
            </li>
            <li
              className={`flex gap-3 items-center font-medium hover:cursor-pointer ${
                sportsTabActive ? "text-red-700 underline" : ""
              } hover:bg-gray-100 p-2 rounded-md`}
              onClick={(e) => hanldeMenuItemClick(e)}
            >
              <GoTrophy className="text-lg" />
              Sports
            </li>
            <li
              className={`flex gap-3 items-center font-medium hover:cursor-pointer ${
                iplTabActive ? "text-red-700 underline" : ""
              } hover:bg-gray-100 p-2 rounded-md`}
              onClick={(e) => hanldeMenuItemClick(e)}
            >
              <FaLaptopCode className="text-lg" />
              IPL
            </li>
            <li
              className={`flex gap-3 items-center font-medium hover:cursor-pointer ${
                podcastTabActive ? "text-red-700 underline" : ""
              } hover:bg-gray-100 p-2 rounded-md`}
              onClick={(e) => hanldeMenuItemClick(e)}
            >
              <MdPodcasts className="text-lg" />
              Podcasts
            </li>
            <li
              className={`flex gap-3 items-center font-medium hover:cursor-pointer ${
                codingTabActive ? "text-red-700 underline" : ""
              } hover:bg-gray-100 p-2 rounded-md`}
              onClick={(e) => hanldeMenuItemClick(e)}
            >
              <FaLaptopCode className="text-lg" />
              Coding
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;

// try to navigate to different pages by getting the parameter from url and not manually

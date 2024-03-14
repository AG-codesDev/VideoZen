import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const hanldeMenuItemClick = (e) => {
    // console.log(e.target.innerText);
    let path = e.target.innerText;
    if (path === "Home") {
      navigate(`/explore?category=${path}`);
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
    } else if (path === "Shorts") {
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
    }
  };

  return (
    <div className="flex flex-col gap-7 z-10 h-full fixed top-16">
      <div className="flex flex-col pl-3 gap-5 top-6 bg-white w-44 ">
        <div className="">
          <ul className="flex flex-col gap-2">
            <li
              className={`flex gap-3 items-center font-medium hover:cursor-pointer ${
                homeTabActive ? "bg-gray-200" : ""
              } hover:bg-gray-100 p-2 rounded-md`}
              onClick={(e) => hanldeMenuItemClick(e)}
            >
              <MdHomeFilled className="text-xl" />
              Home
            </li>

            <li
              className={`flex gap-3 items-center font-medium hover:cursor-pointer ${
                shortsTabActive ? "bg-gray-200" : ""
              } hover:bg-gray-100 p-2 rounded-md`}
              onClick={(e) => hanldeMenuItemClick(e)}
            >
              <SiYoutubeshorts />
              Shorts
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <ul className="flex flex-col gap-3">
            <li
              className={`flex gap-3 items-center font-normal hover:cursor-pointer ${
                trendingTabActive ? "bg-gray-200" : ""
              } hover:bg-gray-100 p-2 rounded-md`}
              onClick={(e) => hanldeMenuItemClick(e)}
            >
              <IoMdTrendingUp className="text-lg" />
              Trending
            </li>
            <li
              className={`flex gap-3 items-center font-normal hover:cursor-pointer ${
                musicTabActive ? "bg-gray-200" : ""
              } hover:bg-gray-100 p-2 rounded-md`}
              onClick={(e) => hanldeMenuItemClick(e)}
            >
              <IoMusicalNoteOutline className="text-lg" />
              Music
            </li>

            <li
              className={`flex gap-3 items-center font-normal hover:cursor-pointer ${
                filmsTabActive ? "bg-gray-200" : ""
              } hover:bg-gray-100 p-2 rounded-md`}
              onClick={(e) => hanldeMenuItemClick(e)}
            >
              <PiFilmSlateBold className="text-lg" />
              Films
            </li>

            <li
              className={`flex gap-3 items-center font-normal hover:cursor-pointer ${
                gamingTabActive ? "bg-gray-200" : ""
              } hover:bg-gray-100 p-2 rounded-md`}
              onClick={(e) => hanldeMenuItemClick(e)}
            >
              <IoGameController className="text-lg" />
              Gaming
            </li>
            <li
              className={`flex gap-3 items-center font-normal hover:cursor-pointer ${
                newsTabActive ? "bg-gray-200" : ""
              } hover:bg-gray-100 p-2 rounded-md`}
              onClick={(e) => hanldeMenuItemClick(e)}
            >
              <FaRegNewspaper className="text-lg" />
              News
            </li>
            <li
              className={`flex gap-3 items-center font-normal hover:cursor-pointer ${
                sportsTabActive ? "bg-gray-200" : ""
              } hover:bg-gray-100 p-2 rounded-md`}
              onClick={(e) => hanldeMenuItemClick(e)}
            >
              <GoTrophy className="text-lg" />
              Sports
            </li>
            <li
              className={`flex gap-3 items-center font-normal hover:cursor-pointer ${
                podcastTabActive ? "bg-gray-200" : ""
              } hover:bg-gray-100 p-2 rounded-md`}
              onClick={(e) => hanldeMenuItemClick(e)}
            >
              <MdPodcasts className="text-lg" />
              Podcasts
            </li>
            <li
              className={`flex gap-3 items-center font-normal hover:cursor-pointer ${
                codingTabActive ? "bg-gray-200" : ""
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

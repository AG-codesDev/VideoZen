import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoHomeOutline } from "react-icons/io5";

import { SiShortcut } from "react-icons/si";

import { IoMdTrendingUp } from "react-icons/io";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { PiFilmSlateBold } from "react-icons/pi";
import { FaRegNewspaper } from "react-icons/fa6";
import { GoTrophy } from "react-icons/go";
import { IoGameController } from "react-icons/io5";
import { MdPodcasts } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";

const MenuItems = () => {
  const [currentLocation, setCurrentLocation] = useState("");
  let location = useLocation();
  // console.log(location);
  const { pathname } = location;
  useEffect(() => {
    setCurrentLocation(pathname);
  }, [location]);
  console.log(currentLocation);

  const [homeTabActive, setHomeTabActive] = useState(true);
  const [shortsTabActive, setShortsTabActive] = useState(false);

  const [trendingTabActive, setTrendingTabActive] = useState(false);
  const [musicTabActive, setMusicTabActive] = useState(false);
  const [filmsTabActive, setFilmsTabActive] = useState(false);
  const [gamingTabActive, setGamingTabActive] = useState(false);
  const [newsTabActive, setNewsTabActive] = useState(false);
  const [podcastTabActive, setPodcastTabActive] = useState(false);
  const [codingTabActive, setCodingTabActive] = useState(false);
  const [iplTabActive, setIplTabActive] = useState(false);

  useEffect(() => {
    if (currentLocation !== "/explore") {
      setShortsTabActive(false);
      setHomeTabActive(false);
      setTrendingTabActive(false);
      setMusicTabActive(false);
      setFilmsTabActive(false);
      setGamingTabActive(false);
      setNewsTabActive(false);
      setPodcastTabActive(false);
      setCodingTabActive(false);
      setIplTabActive(false);
    }
  }, [currentLocation]);

  // const [path, setPath] = useState("");
  // useEffect;

  const navigate = useNavigate();

  const hanldeMenuItemClick = (e) => {
    let path = e.target.innerText;
    // setPath(e.target.innerText);
    // console.log(path);

    if (path === "Shorts") {
      navigate(`/explore?category=${path}`);
      setShortsTabActive(true);

      setHomeTabActive(false);
      setTrendingTabActive(false);
      setMusicTabActive(false);
      setFilmsTabActive(false);
      setGamingTabActive(false);
      setNewsTabActive(false);
      setPodcastTabActive(false);
      setCodingTabActive(false);
      setIplTabActive(false);
    } else if (path === "Trending") {
      navigate(`/explore?category=${path}`);
      setTrendingTabActive(true);

      setHomeTabActive(false);
      setShortsTabActive(false);
      setMusicTabActive(false);
      setFilmsTabActive(false);
      setGamingTabActive(false);
      setNewsTabActive(false);
      setPodcastTabActive(false);
      setCodingTabActive(false);
      setIplTabActive(false);
    } else if (path === "Music") {
      navigate(`/explore?category=${path}`);
      setMusicTabActive(true);

      setHomeTabActive(false);
      setShortsTabActive(false);
      setTrendingTabActive(false);
      setFilmsTabActive(false);
      setGamingTabActive(false);
      setNewsTabActive(false);
      setPodcastTabActive(false);
      setCodingTabActive(false);
      setIplTabActive(false);
    } else if (path === "Films") {
      navigate(`/explore?category=${path}`);
      setFilmsTabActive(true);

      setHomeTabActive(false);
      setShortsTabActive(false);
      setTrendingTabActive(false);
      setMusicTabActive(false);
      setGamingTabActive(false);
      setNewsTabActive(false);
      setPodcastTabActive(false);
      setCodingTabActive(false);
      setIplTabActive(false);
    } else if (path === "Gaming") {
      navigate(`/explore?category=${path}`);
      setGamingTabActive(true);

      setHomeTabActive(false);
      setShortsTabActive(false);
      setTrendingTabActive(false);
      setMusicTabActive(false);
      setFilmsTabActive(false);
      setNewsTabActive(false);
      setPodcastTabActive(false);
      setCodingTabActive(false);
      setIplTabActive(false);
    } else if (path === "News") {
      navigate(`/explore?category=${path}`);
      setNewsTabActive(true);

      setHomeTabActive(false);
      setShortsTabActive(false);
      setTrendingTabActive(false);
      setMusicTabActive(false);
      setFilmsTabActive(false);
      setGamingTabActive(false);
      setPodcastTabActive(false);
      setCodingTabActive(false);
      setIplTabActive(false);
    } else if (path === "Podcasts") {
      navigate(`/explore?category=${path}`);
      setPodcastTabActive(true);

      setHomeTabActive(false);
      setShortsTabActive(false);
      setTrendingTabActive(false);
      setMusicTabActive(false);
      setFilmsTabActive(false);
      setGamingTabActive(false);
      setNewsTabActive(false);
      setCodingTabActive(false);
      setIplTabActive(false);
    } else if (path === "Coding") {
      navigate(`/explore?category=${path}`);
      setCodingTabActive(true);

      setHomeTabActive(false);
      setShortsTabActive(false);
      setTrendingTabActive(false);
      setMusicTabActive(false);
      setFilmsTabActive(false);
      setGamingTabActive(false);
      setNewsTabActive(false);
      setPodcastTabActive(false);
      setIplTabActive(false);
    } else if (path === "IPL") {
      navigate(`/explore?category=${path}`);
      setIplTabActive(true);

      setHomeTabActive(false);
      setShortsTabActive(false);
      setTrendingTabActive(false);
      setMusicTabActive(false);
      setFilmsTabActive(false);
      setGamingTabActive(false);
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
    setPodcastTabActive(false);
    setCodingTabActive(false);
    setIplTabActive(false);
  };
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`flex flex-col gap-7 border-gray-100 ml-0.5 rounded-sm h-full ease-in-out duration-300 border- fixed top-[4.6rem] ${
        isMenuOpen ? "translate-x-0" : "-translate-x-48"
      } `}
    >
      <div className="flex flex-col px-2 mt-4 w-44 ">
        <ul className="flex flex-col gap-5">
          <li
            className={`flex gap-3 items-center hover:cursor-pointer ${
              homeTabActive ? "text-red-500" : ""
            } hover:bg-gray-200 p-2 rounded-md border-gray-200  `}
            onClick={(e) => handleHomeClick()}
          >
            <IoHomeOutline className="text-xl" />
            Home
          </li>

          <li
            className={`flex gap-3 items-center hover:cursor-pointer ${
              shortsTabActive ? "text-red-500" : ""
            } hover:bg-gray-200 p-2 rounded-md border-gray-200  `}
            onClick={(e) => hanldeMenuItemClick(e)}
          >
            <SiShortcut />
            Shorts
          </li>
          <li
            className={`flex gap-3 items-center hover:cursor-pointer ${
              trendingTabActive ? "text-red-500" : ""
            } hover:bg-gray-200 p-2 rounded-md border-gray-200 `}
            onClick={(e) => hanldeMenuItemClick(e)}
          >
            <IoMdTrendingUp className="" />
            Trending
          </li>
          <li
            className={`flex gap-3 items-center hover:cursor-pointer ${
              musicTabActive ? "text-red-500" : ""
            } hover:bg-gray-200 p-2 rounded-md border-gray-200 `}
            onClick={(e) => hanldeMenuItemClick(e)}
          >
            <IoMusicalNoteOutline className="" />
            Music
          </li>

          <li
            className={`flex gap-3 items-center hover:cursor-pointer ${
              filmsTabActive ? "text-red-500" : ""
            } hover:bg-gray-200 p-2 rounded-md border-gray-200 `}
            onClick={(e) => hanldeMenuItemClick(e)}
          >
            <PiFilmSlateBold className="" />
            Films
          </li>

          <li
            className={`flex gap-3 items-center hover:cursor-pointer ${
              gamingTabActive ? "text-red-500" : ""
            } hover:bg-gray-200 p-2 rounded-md border-gray-200 `}
            onClick={(e) => hanldeMenuItemClick(e)}
          >
            <IoGameController className="" />
            Gaming
          </li>
          <li
            className={`flex gap-3 items-center hover:cursor-pointer ${
              newsTabActive ? "text-red-500" : ""
            } hover:bg-gray-200 p-2 rounded-md border-gray-200 `}
            onClick={(e) => hanldeMenuItemClick(e)}
          >
            <FaRegNewspaper className="" />
            News
          </li>
          <li
            className={`flex gap-3 items-center hover:cursor-pointer ${
              iplTabActive ? "text-red-500" : ""
            } hover:bg-gray-200 p-2 rounded-md border-gray-200 `}
            onClick={(e) => hanldeMenuItemClick(e)}
          >
            <FaLaptopCode className="" />
            IPL
          </li>
          <li
            className={`flex gap-3 items-center hover:cursor-pointer ${
              podcastTabActive ? "text-red-500" : ""
            } hover:bg-gray-200 p-2 rounded-md border-gray-200 `}
            onClick={(e) => hanldeMenuItemClick(e)}
          >
            <MdPodcasts className="" />
            Podcasts
          </li>
          <li
            className={`flex gap-3 items-center hover:cursor-pointer ${
              codingTabActive ? "text-red-500" : ""
            } hover:bg-gray-200 p-2 rounded-md border-gray-200 `}
            onClick={(e) => hanldeMenuItemClick(e)}
          >
            <FaLaptopCode className="" />
            Coding
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuItems;

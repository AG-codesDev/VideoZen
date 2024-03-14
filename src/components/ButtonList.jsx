import React, { useState } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_RESULT_VIDEOS } from "../ultils/Constants";
import { addVideos } from "../ultils/appSlice";

const ButtonList = () => {
  const buttonNames = [
    "All",
    "Music",
    "Cricket",
    "Virat Kohli",
    "Gaming",
    "Movies",
    "Courses",
    "New to You",
    "Smart Phones",
    "tech",
    "Nothing phone 2a",
  ];
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();

  const getSearchedVideos = async (btnName) => {
    const data = await fetch(YOUTUBE_SEARCH_RESULT_VIDEOS + "&q=" + btnName);
    const json = await data.json();
    console.log(json.items);
    dispatch(addVideos(json.items));
  };

  const [active, setActive] = useState(false);
  const handleClick = (e, btnName) => {
    // if (btnName === "Music") {
    //   getSearchedVideos(btnName);
    // } else if (btnName === "Cricket") {
    //   getSearchedVideos(btnName);
    // } else if (btnName === "Virat Kohli") {
    //   getSearchedVideos(btnName);
    // } else if (btnName === "Gaming") {
    //   getSearchedVideos(btnName);
    // } else if (btnName === "Movies") {
    //   getSearchedVideos(btnName);
    // } else if (btnName === "Smart Phones") {
    //   getSearchedVideos(btnName);
    // } else if (btnName === "Tech") {
    //   getSearchedVideos(btnName);
    // } else if (btnName === "Nothing phone 2a") {0
    //   getSearchedVideos(btnName);
    // }
    // console.log(e.target.classList);
    // e.target.classList.remove("bg-gray-200", "hover:bg-gray-300");
    // e.target.classList.add("bg-black", "text-white");
    // e.target.classList.add("bg-black");
    setActive(true);
  };
  return (
    <div
      className={`justify-evenly w-4/5 ${
        isMenuOpen ? "ml-60" : "w-full ml-0"
      } flex gap-6 px-2`}
    >
      {buttonNames.map((btn) => (
        <Button btn={btn} key={btn} handleClick={handleClick} active={active} />
      ))}
    </div>
  );
};

export default ButtonList;

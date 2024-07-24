import React from "react";
import { useSelector } from "react-redux";
const VideoDescription = ({ data }) => {
  const { snippet } = data;
  const isDarkModeActive = useSelector((store) => store.app.darkMode);
  const showFull = (e) => {
    e.target.classList.remove("h-20");
  };
  const showLess = (e) => {
    e.target.parentElement.classList.add("h-20");
  };
  return (
    <div
      className={` ${
        isDarkModeActive ? "bg-zinc-700 text-white" : "bg-gray-200"
      } description h-20 mt-2 mb-6  overflow-hidden p-3 rounded-xl text-sm leading-6`}
      onClick={showFull}
    >
      {snippet.description}

      <button onClick={showLess} className="block mt-3 font-semibold">
        Show less
      </button>
    </div>
  );
};

export default VideoDescription;

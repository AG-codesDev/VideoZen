import React from "react";
import { useSelector } from "react-redux";

const WatchPageShimmer = () => {
  const isDarkModeActive = useSelector((store) => store.app.darkMode);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`${isDarkModeActive ? "bg-gray-900" : "bg-white"} ${
        isMenuOpen ? "lg:ml-48" : "lg:ml-10"
      } WatchPageShimmer p-1 mt-16 flex flex-col h-screen`}
    >
      <div
        className={`${
          isDarkModeActive ? "bg-gray-700" : "bg-gray-300"
        }  videoFrame rounded-lg lg:w-[57%] lg:h-[30rem] h-[20rem] my-5`}
      ></div>
      <div
        className={`${
          isDarkModeActive ? "bg-gray-700" : "bg-gray-300"
        } title lg:w-1/2 w-4/5 h-6`}
      ></div>
      <div className="flex items-center gap-3 lg:w-1/2">
        <div
          className={`${
            isDarkModeActive ? "bg-gray-700" : "bg-gray-300"
          } rounded-full h-12 w-12 mt-2`}
        ></div>
        <div
          className={`${isDarkModeActive ? "bg-gray-700" : "bg-gray-300"} `}
        ></div>
        <div
          className={`${
            isDarkModeActive ? "bg-gray-700" : "bg-gray-300"
          } h-5 w-1/3`}
        ></div>
        <div
          className={`${
            isDarkModeActive ? "bg-gray-700" : "bg-gray-300"
          } h-7 rounded-xl w-20`}
        ></div>
      </div>
    </div>
  );
};

export default WatchPageShimmer;

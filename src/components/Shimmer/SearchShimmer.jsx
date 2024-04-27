import React from "react";
import { useSelector } from "react-redux";

const SearchShimmer = () => {
  const dummyCards = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const isDarkModeActive = useSelector((store) => store.app.darkMode);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`${
        isMenuOpen ? "md:ml-56" : "md:ml-10"
      } flex flex-col mt-16 py-5 px-1 gap-4 items-center`}
    >
      {dummyCards.map((card) => (
        <div className="flex flex-col lg:flex-row w-full mx-1" key={card}>
          <div
            className={` ${
              isDarkModeActive ? "bg-gray-700" : "bg-gray-300"
            } lg:w-[25rem] w-full h-52 rounded-lg rouned-md `}
          ></div>

          <div className="flex mt-2 flex-col lg:mx-7 mx-2 lg:w-1/2 gap-4 ">
            <div
              className={` ${
                isDarkModeActive ? "bg-gray-700" : "bg-gray-300"
              } h-5 lg:w-[60%]`}
            ></div>
            <div className=" flex gap-5 items-center h-10">
              <div
                className={` ${
                  isDarkModeActive ? "bg-gray-700" : "bg-gray-300"
                } h-14 w-14 lg:h-10 lg:w-10 rounded-full`}
              ></div>
              <div
                className={`${
                  isDarkModeActive ? "bg-gray-700" : "bg-gray-300"
                } w-[60%] lg:w-1/3 h-5 lg:h-7`}
              ></div>
            </div>
            <div
              className={` ${
                isDarkModeActive ? "bg-gray-700" : "bg-gray-300"
              } hidden  lg:block h-7`}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchShimmer;

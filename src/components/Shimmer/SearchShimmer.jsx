import React from "react";

const SearchShimmer = () => {
  const dummyCards = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  return (
    <div className="flex flex-col mt-20 gap-4 lg:ml-10 items-center">
      {dummyCards.map((card) => (
        <div className="flex flex-col lg:flex-row w-full mx-1" key={card}>
          <div className="lg:w-[25rem] w-full bg-gray-200 h-52 rounded-lg rouned-md "></div>

          <div className="flex mt-2 flex-col lg:mx-7 mx-2 lg:w-1/2 gap-4 ">
            <div className=" h-5 lg:w-[60%] bg-gray-200"></div>
            <div className=" flex gap-5 items-center h-10">
              <div className=" h-14 w-14 lg:h-10 lg:w-10 rounded-full bg-gray-200"></div>
              <div className="bg-gray-200 w-[60%] lg:w-1/3 h-5 lg:h-7"></div>
            </div>
            <div className="hidden lg:block h-7 bg-gray-200"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchShimmer;

import React from "react";
import { useSelector } from "react-redux";

const dummyCards = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "48",
  "49",
  "50",
];

const Shimmer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div
      className={`flex flex-wrap mt-5 gap-2 justify-evenly ml-[11.3rem]  px-2`}
    >
      {dummyCards.map((card) => (
        <div className="  flex flex-col my-2 gap-2" key={card}>
          <div className="imgbox rounded-xl bg-gray-300 w-[23rem] h-52 "></div>
          <div className="flex gap-4">
            <div className="log rounded-full  bg-gray-300 w-10 h-10"></div>
            <div className="flex flex-col gap-2">
              <div className="w-48 h-5 bg-gray-300"></div>
              <div className="w-32 h-5 bg-gray-300"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;

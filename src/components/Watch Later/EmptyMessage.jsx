import React from "react";
import { useSelector } from "react-redux";
const EmptyMessage = () => {
  const isDarkModeActive = useSelector((store) => store.app.darkMode);

  return (
    <div
      className={`${
        isDarkModeActive ? "text-white" : ""
      } text-3xl font-light flex h-screen w-screen justify-center items-center`}
    >
      <span className="text-center font-LilitaOne">
        Watch Later is Empty! <br /> Please add some videos
      </span>
    </div>
  );
};

export default EmptyMessage;

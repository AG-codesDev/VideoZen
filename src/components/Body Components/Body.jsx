import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Heading from "./Heading";
import { useSelector } from "react-redux";

const Body = () => {
  const isDarkModeActive = useSelector((store) => store.app.darkMode);
  return (
    <div className={`${isDarkModeActive ? "bg-gray-900" : ""}`}>
      <Heading />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;

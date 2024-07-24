import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useSelector } from "react-redux";

const Body = () => {
  const isDarkModeActive = useSelector((store) => store.app.darkMode);
  return (
    <div className={`${isDarkModeActive ? "bg-zinc-900" : ""}`}>
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;

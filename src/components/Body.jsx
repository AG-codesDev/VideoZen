import React, { useContext, useState } from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
import Heading from "./Heading";

const Body = () => {
  return (
    <div className="">
      <Heading />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;

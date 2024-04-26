import React from "react";
import MenuItems from "./MenuItems";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // console.log(isMenuOpen);

  return <MenuItems />;
};

export default Sidebar;

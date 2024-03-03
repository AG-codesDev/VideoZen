import React from "react";
import MenuItems from "./MenuItems";
import { useSelector } from "react-redux";
import store from "../ultils/store";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="">
      <MenuItems />
    </div>
  );
};

export default Sidebar;

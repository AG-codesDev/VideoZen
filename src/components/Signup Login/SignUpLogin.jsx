import React from "react";
import { useSelector } from "react-redux";

const SignUpLogin = () => {
  const isDarkModeActive = useSelector((store) => store.app.darkMode);

  return (
    <div className={`${isDarkModeActive ? "bg-gray-900" : "bg-white"}`}></div>
  );
};

export default SignUpLogin;

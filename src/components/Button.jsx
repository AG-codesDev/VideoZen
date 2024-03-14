import React from "react";

const Button = ({ btn, handleClick, active }) => {
  return (
    <button
      className={` ${
        active ? "bg-black text-white" : "bg-gray-200"
      } px-3 py-1 font-semibold text-sm rounded-lg hover:bg-gray-300 transition-all `}
      onClick={(e) => handleClick(e, btn)}
    >
      {btn}
    </button>
  );
};

export default Button;

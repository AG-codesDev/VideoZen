import React from "react";

const Button = ({ btn }) => {
  return (
    <button className="bg-gray-200 px-3 py-1 font-semibold text-sm rounded-lg hover:bg-gray-300 transition-all ">
      {btn}
    </button>
  );
};

export default Button;

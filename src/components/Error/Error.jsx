import React from "react";
import { BiSolidMessageError } from "react-icons/bi";

const Error = () => {
  return (
    <div className="w-full md:text-xl text-lg flex flex-col justify-center mt-52 items-center h-full">
      <span>
        <BiSolidMessageError className="text-9xl text-red-600" />
      </span>
      <div className="flex flex-col items-center font-bold">
        <span className="text-center">
          Either you have opened a LIVE video. Plzz play other video
        </span>
        <span>OR</span>
        <span>
          THE FETCH CALLS HAVE EXCEEDED THE LIMIT TODAY :( <br /> PLEASE
          COMEBACK AFTER 24 HOURS 👋
        </span>
      </div>
    </div>
  );
};

export default Error;

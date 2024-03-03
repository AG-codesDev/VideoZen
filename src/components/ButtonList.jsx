import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonNames = [
    "All",
    "Music",
    "Cricket",
    "Virat Kohli",
    "Gaming",
    "Movies",
    "Courses",
    "New to You",
    "Indian Premier League",
    "Smart Phones",
    "tech",
    "Shah Rukh Khan",
  ];
  return (
    <div className=" justify-around flex gap-6 px-2">
      {buttonNames.map((btn) => (
        <Button btn={btn} key={btn} />
      ))}
    </div>
  );
};

export default ButtonList;

import React from "react";

import SlimeThumb from "../assets/feature_slime_fall.png";

const GameList = () => {
  return (
    <>
      <a
        href="#"
        className="bg-green-purple-1 w-full sm:w-2/3 h-full   text-white flex flex-row justify-center items-center font-bold text-2xl "
      >
        <div className="flex w-3/4 h-full bg-white ">
          <img src={SlimeThumb} alt="" className=" " />
        </div>
      </a>

      <a
        href="#"
        className="truncate w-1/2 h-full collapse lg:visible text-white flex flex-col justify-center items-center font-light text-xl bg-green-purple-1"
      >
        <p>Bounce to avoid deadly traps and obstacles as</p>
        <p className="pb-10">you descend ever deeper into the earth.. </p>
        <p>The more you bounce --- The faster you fall!</p>
      </a>
    </>
  );
};

export default GameList;

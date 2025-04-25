import React from "react";

import SlimeThumb from "../assets/feature_slime_fall.png";

const GameList = () => {
  return (
    <>
      <a
        href="#"
        className="bg-purple-400 w-2/3 h-full   text-white flex flex-row justify-center items-center font-bold text-2xl rounded-l-xl"
      >
        <div className="flex w-3/4 h-full bg-white rounded-l-xl">
          <img src={SlimeThumb} alt="" className=" rounded-l-xl" />
        </div>
        <div className="flex w-1/4 h-full bg-gray-800 "></div>
      </a>

      <a
        href="#"
        className="bg-gray-800 w-1/2 h-full  text-white flex flex-col justify-center items-center font-light text-xl rounded-r-xl"
      >
        <h1 className="pb-10"> How far can you fall?!</h1>
        <p>Bounce to avoid deadly traps and obstacles as</p>
        <p className="pb-10">you descend ever deeper into the earth.. </p>
        <p>TheMore you bounce --- The faster you fall!</p>
      </a>
    </>
  );
};

export default GameList;

import React from "react";
import imageD from "../assets/discord-logo.png";
import imageY from "../assets/yt_square.png";

const Contact = () => {
  return (
    <div className="flex flex-row w-full h-28  rounded-xl bg-purple-400">
      <div className="flex flex-col justify-center items-center w-1/3 bg-gray-800 rounded-l-xl text-white text-2xl">
        <h1>Feel free to join our discord</h1>
      </div>
      <a
        href="#"
        className="flex flex-col justify-center items-center w-1/3 bg-discord-blue"
      >
        <img src={imageD} alt="" className="h-full w-auto rounded-xl" />
      </a>
      <a
        href="#"
        className="flex flex-col justify-center items-center w-1/3 bg-discord-blue rounded-r-xl"
      >
        <img
          src={imageY}
          alt=""
          className="h-full scale-[0.62] w-auto rounded-xl"
        />
      </a>
    </div>
  );
};
export default Contact;

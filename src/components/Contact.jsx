import React from "react";
import imageD from "../assets/discord-logo.png";
import imageY from "../assets/yt_square.png";

const Contact = () => {
  return (
    <div className="flex flex-row w-full h-24  rounded-xl bg-purple-400">
      <div className="truncate flex flex-col justify-center items-center w-1/3 bg-green-purple-1 text-white text-2xl">
        <h1>Feel free to join our discord</h1>
      </div>
      <a
        href="https://discord.gg/Xcp7fwC8qE"
        className="flex flex-col justify-center items-center w-1/3 bg-green-purple-1"
      >
        <img src={imageD} alt="" className="h-full w-auto rounded-xl" />
      </a>
      <a
        href="https://www.youtube.com/@CozyPotion%22"
        className="flex flex-col justify-center items-center w-1/3 bg-green-purple-1"
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

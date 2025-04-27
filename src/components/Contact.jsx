import React from "react";
import imageD from "../assets/discord-logo.png";
import imageY from "../assets/yt_square.png";
import imageThreads from "../assets/threads.png";
import imageInsta from "../assets/insta.png";

const Contact = () => {
  return (
    <div className="flex flex-row w-full h-24  rounded-xl bg-green-purple-1">
      <div className="truncate collapse lg:visible flex flex-col justify-center items-center w-1/3 bg-green-purple-1 text-white text-2xl">
        <h1>Join us on Discord!</h1>
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
      <a
        href="https://www.youtube.com/@CozyPotion%22"
        className="flex flex-col justify-center items-center w-1/3 bg-green-purple-1"
      >
        <img
          src={imageThreads}
          alt=""
          className="h-full scale-[1.05] w-auto rounded-xl"
        />
      </a>

      <a
        href="https://www.instagram.com/cozy.potion/"
        className="flex flex-col justify-center items-center w-1/3 bg-green-purple-1"
      >
        <img
          src={imageInsta}
          alt=""
          className="h-full scale-[1.1] w-auto rounded-xl"
        />
      </a>
    </div>
  );
};
export default Contact;
